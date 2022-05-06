import {  RegisterComponent } from './component/register/login-and-register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { BuyComponent } from './component/buy/buy.component';
import { DetailsComponent } from './component/details/details.component';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { IndeXComponent } from './component/inde-x/inde-x.component';
import { PolicyComponent } from './component/policy/policy.component';
import { TermComponent } from './component/term/term.component';
import { HomeComponent } from './component/home/home.component';
import { SellComponent } from './component/sell/sell.component';
import { FAQComponent } from './component/faq/faq.component';
import { ContactComponent } from './component/contact/contact.component';
import { TransportComponent } from './component/transport/transport.component';
//import { LoginAndRegisterComponent } from './component/login-and-register/login-and-register.component';
import { SocialConnectComponent } from './component/social-connect/social-connect.component';
import { PaymentComponent } from './component/payment/payment.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { SwiperModule } from 'swiper/angular';
import { SellerComponent } from './component/seller/seller.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuyComponent,
    DetailsComponent,
    DisclaimerComponent,
    IndeXComponent,
    PolicyComponent,
    TermComponent,
    HomeComponent,
    SellComponent,
    FAQComponent,
    ContactComponent,
    TransportComponent,
   // LoginAndRegisterComponent,
    SocialConnectComponent,
    PaymentComponent,
   // LoginAndRegisterComponent
   RegisterComponent,
   LoginComponent,
   SellerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,SwiperModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
