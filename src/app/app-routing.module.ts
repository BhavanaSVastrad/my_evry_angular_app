import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './signup/signup.component';

import { ContactusComponent } from './contactus/contactus.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DollsComponent } from './dolls/dolls.component';
import { GamesComponent } from './games/games.component';
import { ToymartComponent } from './deals/toymart/toymart.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'dolls',component:DollsComponent},
  {path:'games',component:GamesComponent},
  {path:'deals',component:ToymartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
