import First from './pages/First';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import Score from './pages/Score';
import Settings from './pages/Settings';

export const routes = {
  'first': {
    path: '/',
    title: '',
    exact: true,
    component: First,
  },
  'index': {
    path: '/faction/:id?/',
    title: 'Фракции',
    exact: false,
    component: Home,
  },
  'score': {
    path: '/score/:id?/',
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
  'map': {
    path: '/map',
    title: 'Карта',
    exact: true,
    component: NotFound,
  },
  'settings': {
    path: '/settings',
    title: 'Настройки',
    exact: true,
    component: Settings,
  },
};
