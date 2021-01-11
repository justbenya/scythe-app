import React, { FC } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { routes } from './routes';
import history from './history';


const App: FC = () => (
    <Router history={ history }>
        <Switch>
            { Object.values(routes).map((route: any) => <Route key={ route.path } { ...route } />) }
            <Route component={ NotFound } />
        </Switch>
    </Router>
);

export default App;
