import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/ui/about/about';
import { Products } from './pages/ui/products/products';
import { Store } from './pages/ui/store/store';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio'
  },
  {
    path: 'ui',
    component: About,
    title: 'Componentes UI - About'
  },
  {
    path: 'products',
    component: Products,
    title: 'Componentes UI -Products'
  },
  {
    path: 'store',
    component: Store,
    title: 'Componentes UI -Store'
  }
];



