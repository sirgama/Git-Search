import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
