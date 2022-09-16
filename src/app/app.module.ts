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
