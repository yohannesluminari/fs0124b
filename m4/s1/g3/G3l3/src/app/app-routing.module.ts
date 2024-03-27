import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FavouriteComponent } from './Pages/favourite/favourite.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'favourite',
    component: FavouriteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
