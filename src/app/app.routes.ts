import { Routes } from '@angular/router';
import { HomePage } from './home-page';
import { WorkDetailPage } from './work-detail-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'opere/:id',
    component: WorkDetailPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
