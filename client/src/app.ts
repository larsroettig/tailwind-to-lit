import { Router } from '@vaadin/router';
import './views/home-view';

const routes = [
  {
    path: '/',
    component: 'lit-app'
  }
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
