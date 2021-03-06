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
import { UserService } from './Services/user.service';
import { SearchBoxComponent } from './Components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { DatepipePipe } from './datepipe.pipe';
import { SelectDirective } from './select.directive';
import { FooterComponent } from './Components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    UsersComponent,
    RepositoriesComponent,
    HomeuserComponent,
    SearchBoxComponent,
    DatepipePipe,
    SelectDirective,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
