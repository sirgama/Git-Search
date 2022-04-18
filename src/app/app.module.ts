import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { UsersComponent } from './Component/users/users.component';
import { RepositoriesComponent } from './Component/repositories/repositories.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeuserComponent } from './Components/homeuser/homeuser.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    UsersComponent,
    RepositoriesComponent,
    HomeuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
