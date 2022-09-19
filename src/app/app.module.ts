import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
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

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    CarouselComponent,
    SigninComponent,
    SignupComponent,
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
     
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
