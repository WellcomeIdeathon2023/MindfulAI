import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd

# Create a sample DataFrame
data = {
    'Username': ['User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8'],
    'Icons': ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5', 'Icon6', 'Icon7', 'Icon8'],
    'Trialpoints': [250, 220, 200, 180, 160, 140, 120, 100]
}
df = pd.DataFrame(data)

# Sort the DataFrame by Trialpoints
df_sorted = df.sort_values(by='Trialpoints', ascending=False)

# Create the 3D scatter plot with bar markers
fig = go.Figure()

# Add the scatter plot trace to the figure
fig.add_trace(go.Scatter3d(
    x=df_sorted['Username'],
    y=[0] * len(df_sorted),  # Set the y-coordinate to 0 for all markers
    z=df_sorted['Trialpoints'],
    text=df_sorted['Trialpoints'],
    hovertext=df_sorted['Icons'],
    hoverinfo='text',
    mode='markers',
    marker=dict(
        color=df_sorted['Trialpoints'],
        size=df_sorted['Trialpoints'],
        colorscale='Viridis',
        colorbar=dict(title='Trialpoints'),
    )
))

# Customize the 3D scatter plot layout
fig.update_layout(
    title='Leaderboard - 3D Bar Chart',
    scene=dict(
        xaxis=dict(title='Username'),
        yaxis=dict(visible=False),
        zaxis=dict(title='Trialpoints'),
    ),
    height=600,
    width=800,
)

# Create the table subplot
table_trace = go.Table(
    header=dict(values=['Icon', 'Username', 'Trialpoints']),
    cells=dict(values=[df_sorted['Icons'], df_sorted['Username'], df_sorted['Trialpoints']])
)

# Create the figure with the scatter plot and table subplot
fig = make_subplots(rows=2, cols=1, specs=[[{'type': 'scatter3d'}], [{'type': 'table'}]])
fig.add_trace(fig.data[0], row=1, col=1)
fig.add_trace(table_trace, row=2, col=1)

# Customize the table subplot layout
fig.update_layout(
    title='Leaderboard - 3D Bar Chart with Table',
    height=800,
    width=800,
)

# Show the figure
fig.show()
