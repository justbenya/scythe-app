import { createMuiTheme, CssBaseline } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';
import NotFound from '../pages/NotFound';
import { routes } from '../routes';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: red,
        primary: {
            main: '#FFB74D',
            light: 'rgb(255, 197, 112)',
            dark: 'rgb(200, 147, 89)',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        error: {
            main: red.A400,
        },
    },
});

const App: FunctionComponent = () => (
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Router history={ history }>
            <Switch>
                { Object.values(routes).map((route: any) => <Route key={ route.path } { ...route } />) }
                <Route component={ NotFound } />
            </Switch>
        </Router>
    </ThemeProvider>
);

export default App;
