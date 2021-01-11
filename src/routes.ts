import Result from './pages/Result';
import Score from './pages/Score';
import Start from './pages/Start';
import StartGame from './pages/StartGame';
import NotFound from './pages/NotFound';
import Topics from './Topics';

export const routes = {
    'index': {
        path: '/fraction/',
        title: 'Фракции',
        exact: false,
        component: StartGame,
    },
    'fraction': {
        path: '/fraction/:id/',
        title: 'Кто играет?',
        exact: true,
        component: Topics,
    },
    'score': {
        path: '/score/:id',
        title: 'Подсчет очков',
        exact: true,
        component: Score,
    },
    'map': {
        path: '/map',
        title: 'Карта',
        exact: true,
        component: Topics,
    },
    'settings': {
        path: '/settings',
        title: 'Настройки',
        exact: true,
        component: NotFound,
    },
    'result': {
        path: '/result',
        title: 'Итоги по окончанию игры',
        exact: true,
        component: Result,
    }
};
