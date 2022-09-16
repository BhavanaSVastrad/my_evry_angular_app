import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './signup/signup.component';

import { ContactusComponent } from './contactus/contactus.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
const routes: Routes = [
  {path:'',component:CarouselComponent},
  
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'vehicles',component:VehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
