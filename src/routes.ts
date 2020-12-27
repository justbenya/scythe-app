import Result from './pages/Result';
import Score from './pages/Score';
import Start from './pages/Start';

export const routes = {
    'index': {
        path: '/',
        title: 'Кто играет?',
        exact: true,
        component: Start,
    },
    'score': {
        path: '/score/:id',
        title: 'Подсчет очков',
        exact: true,
        component: Score,
    },
    'result': {
        path: '/result',
        title: 'Результат',
        exact: true,
        component: Result,
    },
};
