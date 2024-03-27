import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PreferitiComponent } from './Components/preferiti/preferiti.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'preferiti',
    component: PreferitiComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
