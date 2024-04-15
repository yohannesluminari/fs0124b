import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteMoviesRoutingModule } from './favourite-movies-routing.module';
import { FavouriteMoviesComponent } from './favourite-movies.component';


@NgModule({
  declarations: [
    FavouriteMoviesComponent
  ],
  imports: [
    CommonModule,
    FavouriteMoviesRoutingModule
  ]
})
export class FavouriteMoviesModule { }
