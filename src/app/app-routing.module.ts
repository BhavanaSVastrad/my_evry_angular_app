import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './register/register.component';

import { ContactusComponent } from './contactus/contactus.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DollsComponent } from './dolls/dolls.component';
import { GamesComponent } from './games/games.component';
import { ToymartComponent } from './deals/toymart/toymart.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { GamesnewComponent } from './gamesnew/gamesnew.component';
const routes: Routes = [
  {path:'',component:CarouselComponent},
  
  {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'dolls',component:DollsComponent},
  {path:'games',component:GamesComponent},
  {path:'deals',component:ToymartComponent},
  {path:'categories',component:AllcategoriesComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'prod_details',component:ProductdetailsComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'gamesnew',component:GamesnewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
