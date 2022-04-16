import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { UsersComponent } from './Component/users/users.component';
import { RepositoriesComponent } from './Component/repositories/repositories.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    UsersComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
