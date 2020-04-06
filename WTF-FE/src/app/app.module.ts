import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    RestaurantPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
