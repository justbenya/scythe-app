import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import Score from './pages/Score';
import Start from './pages/Start';

export const routes = [
    {
        path: '/',
        title: 'Кто играет?',
        exact: true,
        component: Start,
    },
    {
        path: '/score/:id',
        title: 'Подсчет очков',
        exact: true,
        component: Score,
    },
    {
        path: '/result',
        title: 'Результат',
        exact: true,
        component: Result,
    },
    {
        path: '',
        title: '404',
        exact: false,
        component: NotFound,
    },
];

function App() {
    return (
        <Router history={ history }>
            <Switch>
                { routes.map(route => <Route key={ route.path } { ...route } />) }
            </Switch>
        </Router>
    );
}

export default App;
