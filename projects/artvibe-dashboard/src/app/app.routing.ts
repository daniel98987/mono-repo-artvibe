import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './main/navbar/components/navbar/navbar.component';
import { DashboardComponent } from './main/navbar/components/dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  }

];
