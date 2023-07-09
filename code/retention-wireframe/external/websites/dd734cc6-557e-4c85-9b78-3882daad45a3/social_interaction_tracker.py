import pandas as pd
import numpy as np
import plotly.graph_objects as go

# Generate synthetic data with changes over time
np.random.seed(0)
num_periods = 100  # Number of time periods

# Generate random values for social interactions
chats = np.random.randint(10, 40, size=num_periods)
friends_added = np.random.randint(0, 20, size=num_periods)
group_activities = np.random.randint(5, 30, size=num_periods)

# Create a DataFrame with the data
df = pd.DataFrame({
    'Date': pd.date_range(start='2022-01-01', periods=num_periods),
    'Chats': chats,
    'Friends Added': friends_added,
    'Group Activities': group_activities
})

# Create the line graph figure
fig = go.Figure()

# Add the line traces for each social interaction with contrasting colors
fig.add_trace(go.Scatter(
    x=df['Date'],
    y=df['Chats'],
    mode='lines',
    name='Chats',
    line=dict(color='#00ffff')
))

fig.add_trace(go.Scatter(
    x=df['Date'],
    y=df['Friends Added'],
    mode='lines',
    name='Friends Added',
    line=dict(color='#ff00ff')
))

fig.add_trace(go.Scatter(
    x=df['Date'],
    y=df['Group Activities'],
    mode='lines',
    name='Group Activities',
    line=dict(color='#ffff00')
))

# Configure the layout with black background and adjusted colors
fig.update_layout(
    title='Social Interactions Over Time',
    plot_bgcolor='black',
    paper_bgcolor='black',
    font=dict(color='white'),
    xaxis=dict(
        title='Date',
        showgrid=False,
        zeroline=False,
        tickformat='%b %d, %Y',
        ticks='outside',
        tickangle=45,
        tickfont=dict(size=10, color='white'),
        automargin=True
    ),
    yaxis=dict(
        title='Social Interactions',
        showgrid=False,
        zeroline=False,
        tickfont=dict(size=10, color='white'),
        automargin=True
    ),
    margin=dict(
        l=50,  # Left margin
        r=50,  # Right margin
        t=80,  # Top margin
        b=50   # Bottom margin
    )
)

# Save the graph as an HTML file
fig.write_html('social_interactions.html')
