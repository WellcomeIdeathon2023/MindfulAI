import os
import re
import pandas as pd
import parfit as pf
import matplotlib.pyplot as plt
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import StratifiedKFold, ParameterGrid, train_test_split
from sklearn.metrics import (accuracy_score, roc_curve, auc, roc_auc_score, 
                             precision_recall_curve, average_precision_score)
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, AdaBoostClassifier

def feature_preprop(df):
    predict_cols = ['DOB', 'Latitude', 'Longitude', 'Sex', 'Gender', 'Ethnicity', 'Employment status', 
                'Smoking status', 'ETOH units per week', 'Recreational drug use', 'GP Latitude', 'GP longitude',
                'Hospital latitude', 'Hospital longitude', 'Diagnosis', 'Duration of diagnosis',
                'Family History', 'Under Community Mental Health Team',
                'Has had inpatient treatment', 'Has had therapy', 'On anxiolytic',
                'On anti-depressant', 'On lithium', 'On valproate', 'Polypharmacy',
                'Physical disability', 'Carers', 'Enrollment points', 
                'Logged symptoms today points: timepoint 0',
                'Checked in today points: timepoint 0',
                'Asked a question points: timepoint 0',
                'Answered a question points: timepoint 0',
                'Spoke to trialbot points: timepoint 0',
                'Cumulative log points: timepoint 0',
                'Cumulative check in points: timepoint 0',
                'Cumulative answered question points: timepoint 0',
                'Cumulative spoke to bot points: timepoint 0',
                'HADS-Anxiety: timepoint 0', 'HADS-Depression: timepoint 0',
                'Personal health rating: timepoint 0']
    pred = df[predict_cols].copy()
    #feature engineering
    pred.replace('Not disclosed', np.nan, inplace=True)
    pred['Age'] = (pd.to_datetime('now') - pd.to_datetime(pred['DOB'], errors='coerce')) / np.timedelta64(1, 'Y')
    pred.drop(['DOB'], axis=1, inplace=True)
    #code binary
    bin_cols = pred[pred.nunique()[pred.nunique().values == 2].index].columns
    pred[bin_cols].replace(to_replace=['Yes', 'Positive', 'Employed', 'Female'], value=1)
    pred[bin_cols].replace(to_replace=['No', 'Negative', 'Unemployed', 'Male'], value=0)
    pred = pd.get_dummies(pred).astype(float)
    
    return pred

def split_scale_numeric(X, y):
    """
    Splits the configured data into train and test, standardises and imputes NaNs prior to modelling.

    Parameters
    ---------------
    X : Pandas DataFrame
        features
    y : Pandas Series or a 1d array
        target
    test_batch : None or [X, y]
        scales and imputes from training data

    Returns
    ---------------
    X_train : Pandas DataFrame
        Training split features
    y_train : Pandas DataFrame
        Training split target
    X_val : Pandas DataFrame
        Validation split features
    y_val : Pandas DataFrame
        Validation split target
    X_train_all : Pandas DataFrame
        Training and validation split features eg. for K-fold cv
    y_train_all : Pandas DataFrame
        Training and validation split target eg. for K-fold cv
    X_test : Pandas DataFrame
        Test split features
    y_test : Pandas DataFrame
        Test split target
    """
    # drop non-numeric characters and convert to numeric
    for col in X.columns:
        X[col] = X[col].astype(str).str.extract('(\d+)', expand=False)
        X[col] = X[col].apply(pd.to_numeric)
    # Create the holdout test set. Keep random state at 42
    X_train_all, X_test, y_train_all, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)
    # Create the validation set. Keep random state at 100
    X_train, X_val, y_train, y_val = train_test_split(
        X_train_all, y_train_all, test_size=0.2, random_state=100)
    # Fill nan
    X_train.fillna(X_train.median(), inplace=True)
    X_val.fillna(X_train.median(), inplace=True) # use training median imputation for test and val
    X_test.fillna(X_train.median(), inplace=True)
    # Standardise
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_train = pd.DataFrame(X_train)
    X_val = scaler.transform(X_val) # use training scaling parameters for test and val
    X_val = pd.DataFrame(X_val)
    X_test = scaler.transform(X_test)
    X_test = pd.DataFrame(X_test)
    # pass all training values
    X_train_all = pd.concat([X_train, X_val])
    y_train_all = pd.concat([y_train, y_val])

    return X_train, y_train, X_val, y_val, X_train_all, y_train_all, X_test, y_test


def gridsearch_classifier_panel(X_train, y_train, metric=roc_auc_score, n_folds=2):
    """Parallel gridsearch on a hard-coded set of classifiers. Currently only for forest methods."""
    classifiers = [RandomForestClassifier(random_state=0),
                   GradientBoostingClassifier(random_state=0)]
    names = ["Random Forest",
             "Gradient Boosting"]

    # What hyper-parameters to test
    hyper_parameters = [{'max_depth': [5, 10, 20, 30, 40, None],
                         'n_estimators': np.arange(100, 600, 100)},# Random Forest
                        {'n_estimators': np.arange(50, 800, 50),
                         'learning_rate': np.logspace(-4, 0, 20)}]  # GBM

    # Do k-fold cross-validation, with hyper-parameter grid search
    scores = []  # store ROC AUCs
    models = []  # Store models
    cnt = 0
    for name, classifier, params in zip(names, classifiers, hyper_parameters):
        # Grid-search over classifier hyper-parameters
        best_model, best_score, _, _ = pf.bestFit(classifier, ParameterGrid(params),
                                                  X_train, y_train,
                                                  metric=metric, nfolds=n_folds)
        # Print best parameters
        print(str(name) + ' best score is: ' + str(best_score))

        # Save model and scores
        models.append(best_model)
        scores.append(best_score)
        cnt += 1

    return classifiers, models, scores


def plot_ROC(X, y, clf, folds, save_name):

    # Run classifier with cross-validation and plot ROC curves
    cv = StratifiedKFold(n_splits=folds)
    tprs = []
    aucs = []
    mean_fpr = np.linspace(0, 1, 100)
    i = 0
    for train, test in cv.split(X, y):
        probas_ = clf.fit(X.iloc[train], y.iloc[train]).predict_proba(X.iloc[test])

        # Compute ROC curve and area the curve
        fpr, tpr, thresholds = roc_curve(y.iloc[test], probas_[:, 1])
        tprs.append(np.interp(mean_fpr, fpr, tpr))
        tprs[-1][0] = 0.0
        roc_auc = auc(fpr, tpr)
        aucs.append(roc_auc)
        i += 1
    plt.style.use('seaborn-white')
    plt.figure(figsize=(6,6))
    plt.plot([0, 1], [0, 1], linestyle='--', lw=2, color='r',
             label='Chance', alpha=.8)

    mean_tpr = np.mean(tprs, axis=0)
    mean_tpr[-1] = 1.0
    mean_auc = auc(mean_fpr, mean_tpr)
    std_auc = 2*np.std(aucs)
    plt.plot(mean_fpr, mean_tpr, color='b',
             label=r'Mean training ROC (AUC = %0.3f $\pm$ %0.2f)' % (mean_auc, std_auc),
             lw=2, alpha=.8)

    std_tpr = 1 * np.std(tprs, axis=0)
    tprs_upper = np.minimum(mean_tpr + std_tpr, 1)
    tprs_lower = np.maximum(mean_tpr - std_tpr, 0)
    plt.fill_between(mean_fpr, tprs_lower, tprs_upper, color='grey', alpha=.4,
                     label=r'$\pm$ 1 std. dev.')

    plt.xlim([-0.02, 1.02])
    plt.ylim([-0.02, 1.02])
    plt.xlabel('False Positive Rate', fontsize=20)
    plt.ylabel('True Positive Rate', fontsize=20)
    plt.title('Receiver operating characteristic', fontsize=20)
    plt.legend(loc="lower right")
    plt.tick_params(labelsize=16)
    plt.show
    plt.savefig(os.path.join('outputs', save_name), transparent=True)
      

def train_test_process(X_train, y_train, X_test, y_test):

    """
    Takes training and test X and y, standardises and imputes test data using training data.

    Parameters
    ---------------
    X_train : Pandas DataFrame
        train features
    y_train : Pandas Series or a 1d array
        train target
    X_test : Pandas DataFrame
        test features
    y_test: Pandas series or a 1d array
        test_target

    Returns
    ---------------
    X_train : Pandas DataFrame
        Training features
    y_train : Pandas DataFrame
        Training target
    X_test : Pandas DataFrame
        Test features
    y_test : Pandas DataFrame
        Test target
    """
    # add any missing columns from test as null
    missing_cols = set(X_train.columns) - set(X_test.columns)
    for c in missing_cols:
        X_test[c] = 0
    #ensure in same order as training set
    X_test = X_test[X_train.columns]
    # drop non-numeric characters and convert to numeric
    for col in X_train.columns:
        X_train[col] = X_train[col].astype(str).str.extract('(\d+)', expand=False)
        X_train[col] = X_train[col].apply(pd.to_numeric)
    for col in X_test.columns:
        X_test[col] = X_test[col].astype(str).str.extract('(\d+)', expand=False)
        X_test[col] = X_test[col].apply(pd.to_numeric)
    # Fill nan
    X_train.fillna(X_train.median(), inplace=True)
    # Fill test nan with train medians
    X_test.fillna(X_train.median(), inplace=True)
    # Standardise
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    # Standardise test using train values
    X_test = scaler.transform(X_test)

    return X_train, y_train, X_test, y_test