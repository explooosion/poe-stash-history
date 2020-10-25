import Dashboard from '../pages/Dashboard';
import History from '../pages/History';
import Members from '../pages/Members';
import Statistics from '../pages/Statistics';
import Login from '../pages/Login';

export default [
  {
    key: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
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
    key: 'members',
    path: '/members',
    exact: true,
    component: Members,
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

export const GlobaleRoutes = [
  {
    key: 'login',
    path: '/login',
    exact: false,
    component: Login,
    title: '',
  },
]
