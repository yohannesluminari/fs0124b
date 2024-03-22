import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'fiat',
    component: FiatComponent
  },
  {
    path:'ford',
    component: FordComponent
  },
  {
    path:'audi',
    component: AudiComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

  const routes1: Routes = [
    { path: 'fiat', component: FiatComponent },
    { path: 'ford', component: FordComponent },
    { path: 'audi', component: AudiComponent },
    { path: '**', component: Page404Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
