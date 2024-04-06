import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[GuestGuard], canActivateChild :[GuestGuard]},

  { path: 'areaPrivata', loadChildren: () => import('./area-privata/area-privata.module').then(m => m.AreaPrivataModule),
    canActivate:[GuestGuard], canActivateChild :[GuestGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
