import React, { FunctionComponent } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';
import NotFound from '../pages/NotFound';
import { routes } from '../routes';

const App: FunctionComponent = () => (
    <Router history={ history }>
        <Switch>
            { Object.values(routes).map((route: any) => <Route key={ route.path } { ...route } />) }
            <Route component={ NotFound } />
        </Switch>
    </Router>
);

export default App;
