import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovenyComponent } from './noveny/noveny.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { RendelesComponent } from './rendeles/rendeles.component';



@NgModule({
  declarations: [
    AppComponent,
    NovenyComponent,
    BasketComponent,
    HomeComponent,
    RendelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }