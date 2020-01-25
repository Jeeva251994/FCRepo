import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { FormsModule } from '@angular/forms';

import {SlideshowModule} from 'ng-simple-slideshow';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';  


import { NgxGalleryModule } from 'ngx-gallery';

import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
