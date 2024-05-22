import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PlanningComponent } from './pages/planning/planning.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'planning', component: PlanningComponent },
  { path: '**', component: HomeComponent },
];
