import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteMoviesComponent } from './favourite-movies.component';

const routes: Routes = [{ path: '', component: FavouriteMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteMoviesRoutingModule { }
