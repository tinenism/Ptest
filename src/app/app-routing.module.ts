import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './comps/menu/menu.component';
import { SigninComponent } from './comps/signin/signin.component';
import { SignupComponent } from './comps/signup/signup.component';

const routes: Routes = [
  {
    path:"menu", component:MenuComponent
  },
  {
    path:"signin", component:SigninComponent
  },
  {
    path:"signup", component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
