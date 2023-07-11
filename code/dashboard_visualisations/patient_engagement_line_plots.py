import pandas as pd
import numpy as np
import plotly.graph_objects as go
import dash
from dash import dcc
from dash import html
from dash.dependencies import Output, Input
import imageio
import time
from PIL import Image
import io

# Generate synthetic data with changes over time
np.random.seed(0)
num_periods = 12  # Number of time periods
num_participants = 20  # Number of participants

# Generate the baseline values for each participant
baseline_values = np.random.randint(50, 100, size=num_participants)

# Generate the change in values for each participant
change_values = np.random.randint(-20, 20, size=(num_periods, num_participants))

# Generate the temporal data for each participant
participant_data = np.zeros((num_periods, num_participants))
for i in range(num_periods):
    participant_data[i] = baseline_values + np.cumsum(change_values[i])

# Calculate the improvement or worsening for each participant
improvement = participant_data[-1] - participant_data[0]
color_codes = np.where(improvement >= 0, 'green', 'red')

# Create the app layout
app = dash.Dash(__name__)
app.layout = html.Div(
    [
        dcc.Graph(id='live-line-plot', animate=True),
        dcc.Interval(
            id='interval-component',
            interval=1000,  # Update every 1 second (1000 milliseconds)
            n_intervals=0
        )
    ]
)

# Create the line plot figure
fig = go.Figure()
for i in range(num_participants):
    fig.add_trace(go.Scatter(
        x=np.arange(num_periods),
        y=participant_data[:, i],
        mode='lines',
        name=f'Participant {i + 1}',
        line=dict(color=color_codes[i])
    ))

fig.update_layout(
    legend=dict(orientation='v'),
    xaxis=dict(title='Days'),
    yaxis=dict(title='(Dis) Engagement')
)


# Define the callback function to update the line plot
@app.callback(Output('live-line-plot', 'figure'), [Input('interval-component', 'n_intervals')])
def update_line_plot(n):
    global participant_data, color_codes
    # Generate new change values for each participant
    change_values = np.random.randint(-20, 20, size=(num_periods, num_participants))

    # Update the temporal data for each participant
    for i in range(num_periods):
        participant_data[i] = baseline_values + np.cumsum(change_values[i])

    # Calculate the improvement or worsening for each participant
    improvement = participant_data[-1] - participant_data[0]
    color_codes = np.where(improvement >= 0, 'green', 'red')

    # Update the y-values and line colors of the line plot traces
    for i, trace in enumerate(fig.data):
        trace.y = participant_data[:, i]
        trace.line.color = color_codes[i]

    return fig


if __name__ == '__main__':
    frames = []
    num_frames = 20  # Number of frames to capture

    for frame in range(num_frames):
        # fig.update_layout(title=f"Frame {frame + 1}")
        image_bytes = fig.to_image(format="png")
        image = Image.open(io.BytesIO(image_bytes))
        frames.append(np.array(image))

        # Generate new change values for each participant
        change_values = np.random.randint(-20, 20, size=(num_periods, num_participants))

        # Update the temporal data for each participant
        for i in range(num_periods):
            participant_data[i] = baseline_values + np.cumsum(change_values[i])

        # Calculate the improvement or worsening for each participant
        improvement = participant_data[-1] - participant_data[0]
        color_codes = np.where(improvement >= 0, 'green', 'red')

        # Update the y-values and line colors of the line plot traces
        for i, trace in enumerate(fig.data):
            trace.y = participant_data[:, i]
            trace.line.color = color_codes[i]

        time.sleep(1)  # Delay between updates

    imageio.mimsave("live_line_plot.gif", frames, format="GIF", duration=1)
