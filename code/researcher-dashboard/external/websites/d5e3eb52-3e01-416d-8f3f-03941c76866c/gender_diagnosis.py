import pandas as pd
import plotly.graph_objects as go

# Sample data
df = pd.read_csv("/Users/sam/Desktop/james-interactive-graph/code/simulated_data/simulated_data.csv")

# Group the DataFrame by Gender and Diagnosis and count the occurrences
grouped_df = df.groupby(['Gender', 'Diagnosis']).size().reset_index(name='Count')

# Define colors for the donut plot
colors = ['#FFC0CB', '#ADD8E6', '#98FB98', '#FFD700']

# Create the donut plot
fig = go.Figure(data=[go.Pie(
    labels=grouped_df['Gender'],
    values=grouped_df['Count'],
    hole=0.6,
    marker=dict(colors=colors),
    hovertemplate='Gender: %{label}<br>Count: %{value}',
)])

# Set layout properties
fig.update_layout(
    # title='Gender vs Diagnosis',
    plot_bgcolor='white',
    paper_bgcolor='white',
    showlegend=True,
    legend=dict(orientation='v', yanchor='middle', y=0.5, xanchor='right', x=1),
    #legend=dict(orientation='h', yanchor='bottom', y=1.02, xanchor='right', x=1),
    margin=dict(l=0, r=5, t=5, b=5)
)

# Save the plot as a high-quality PNG image
fig.write_image('/Users/sam/Desktop/james-interactive-graph/code/geospatial/gender_vs_diagnosis.png', format='png', width=600, height=600, scale=2)
