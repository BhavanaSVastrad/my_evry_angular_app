import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';

import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DollsComponent } from './dolls/dolls.component';
import { GamesComponent } from './games/games.component';
import { GamesdealComponent } from './games/gamesdeal/gamesdeal.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { DealsComponent } from './deals/deals.component';
import { ToymartComponent } from './deals/toymart/toymart.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    CarouselComponent,

    SearchComponent,

    ContactusComponent,
    VehiclesComponent,
    DollsComponent,
    GamesComponent,
    GamesdealComponent,
    CounterComponent,
    CounterchildComponent,
    AdvertisementComponent,
    AllcategoriesComponent,
    DealsComponent,
    ToymartComponent,
    FurnitureComponent,
    RegisterComponent,
    LoginComponent,
    ProductdetailsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
