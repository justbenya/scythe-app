import React, { FC } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import NotFound from './pages/NotFound';
import { routes } from './routes';

const App: FC = () => (
    <Router history={ history }>
        <Switch>
            { Object.values(routes).map(route => <Route key={ route.path } { ...route } />) }
            <Route component={ NotFound } />
        </Switch>
    </Router>
);

export default App;
