import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodModule } from './food';
import { BagModule } from './bag';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoodModule,
    HttpClientModule,
    FontAwesomeModule,
    BagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
