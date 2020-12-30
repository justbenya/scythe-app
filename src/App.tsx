import React, { FC } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { routes } from './routes';

const App: FC = () => (
    <HashRouter basename="/">
        <Switch>
            { Object.values(routes).map(route => <Route key={ route.path } { ...route } />) }
            <Route component={ NotFound } />
        </Switch>
    </HashRouter>
);

export default App;
