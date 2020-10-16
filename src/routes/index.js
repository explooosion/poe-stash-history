import Home from '../pages/Home';
import History from '../pages/History';
import Players from '../pages/Players';
import Statistics from '../pages/Statistics';

export default [
  {
    key: 'root',
    path: '/',
    exact: true,
    component: Home,
    title: '',
  },
  {
    key: 'history',
    path: '/history',
    exact: true,
    component: History,
    title: '',
  },
  {
    key: 'players',
    path: '/players',
    exact: true,
    component: Players,
    title: '',
  },
  {
    key: 'statistics',
    path: '/statistics',
    exact: true,
    component: Statistics,
    title: '',
  },
]
