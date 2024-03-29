import { UserComponent } from './Pages/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TaskLeftComponent } from './Pages/task-left/task-left.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "taskLeft",
    component:TaskLeftComponent
  },
  {
    path: "users",
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
