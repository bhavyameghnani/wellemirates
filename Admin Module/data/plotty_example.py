import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd



df = pd.read_csv("/media/preeth/Data/accenture_desk_buddy/data/desk_buddy.csv")
app = dash.Dash(__name__)

app.layout = html.Div([
    html.P("Names:"),
    dcc.Dropdown(
        id='names', 
        value='day', 
        options=[{'value': x, 'label': x} 
                 for x in ['module', 'department']],
        clearable=False
    ),
    html.P("Values:"),
    dcc.Dropdown(
        id='values', 
        value='day', 
        options=[{'value': x, 'label': x} 
                 for x in ['user_name', 'day',]],
        clearable=False
    ),
    dcc.Graph(id="pie-chart"),
])

@app.callback(
    Output("pie-chart", "figure"), 
    [Input("names", "value"), 
     Input("values", "value")])

def generate_chart(names, values):
    fig = px.pie(df, values=values, names=names)
    return fig

app.run_server(debug=True, port=9501)