import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

},

  { path: 'areaPrivata', loadChildren: () => import('./area-privata/area-privata.module').then(m => m.AreaPrivataModule),

},
  { path: 'registeredUsers', loadChildren: () => import('./registered-users/registered-users.module').then(m => m.RegisteredUsersModule) },
  { path: 'FavouriteMovies', loadChildren: () => import('./favourite-movies/favourite-movies.module').then(m => m.FavouriteMoviesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
