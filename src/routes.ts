import Result from './pages/Result';
import ResultShort from './pages/ResultShort';
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
        title: 'Итоги по окончанию игры',
        exact: true,
        component: Result,
    },
    'winner': {
        path: '/winner',
        title: 'Результат',
        exact: true,
        component: ResultShort,
    },
};
