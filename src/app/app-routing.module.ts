import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { UsersComponent } from './Component/users/users.component';
import { RepositoriesComponent } from './Component/repositories/repositories.component';

const routes: Routes = [
  {path: 'hero', component: HeroComponent},
  {path: 'users', component: UsersComponent},
  {path: 'repository', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
