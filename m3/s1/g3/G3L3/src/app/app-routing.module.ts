import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InactiveComponent } from './pages/inactive/inactive.component';
import { ActiveComponent } from './pages/active/active.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'active',
    component: ActiveComponent
  },
  {
    path:'inactive',
    component: InactiveComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
