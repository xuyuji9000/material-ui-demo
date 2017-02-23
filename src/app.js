import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SimpleAppBarExample from "./SimpleAppBarExample";

const App = function()
{
    return (
        <MuiThemeProvider>
            <SimpleAppBarExample></SimpleAppBarExample>
        </MuiThemeProvider>
    );
}

render(
    <App></App>,
    document.getElementById('root')
);
