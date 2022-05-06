import { PaymentComponent } from './component/payment/payment.component';
import { SocialConnectComponent } from './component/social-connect/social-connect.component';

import { TransportComponent } from './component/transport/transport.component';
import { ContactComponent } from './component/contact/contact.component';
import { SellComponent } from './component/sell/sell.component';
import { SellerComponent } from './component/seller/seller.component';
import { HomeComponent } from './component/home/home.component';
import { TermComponent } from './component/term/term.component';
import { PolicyComponent } from './component/policy/policy.component';
import { DetailsComponent } from './component/details/details.component';
import { BuyComponent } from './component/buy/buy.component';
import { AboutComponent } from './component/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { IndeXComponent } from './component/inde-x/inde-x.component';
import { FAQComponent } from './component/faq/faq.component';
import { RegisterComponent } from './component/register/login-and-register.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'term', component: TermComponent },
  { path: 'index', component: IndeXComponent },
  { path: 'sell', component: SellComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'social', component: SocialConnectComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
