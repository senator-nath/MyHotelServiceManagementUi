import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRgisterComponent } from './user/user-register/user-rgister.component';
import { RoomsComponent } from './hotel-Facilities/rooms/rooms.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home-My-Hotel-Management'},
  {path:'login',component:UserLoginComponent,title:'Login'},
  {path:'register',component:UserRgisterComponent,title:'Register'},
  {path:'room',component:RoomsComponent,title:'room'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
