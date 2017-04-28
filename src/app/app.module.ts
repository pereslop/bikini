import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { GirlImageComponent } from './girl-image/girl-image.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    OrderComponent,
    ContactComponent,
    OrderComponent,
    GirlImageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent },
      {path: 'about', component: AboutComponent },
      {path: 'order', component: OrderComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: 'main', pathMatch: 'full'}
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
