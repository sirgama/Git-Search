import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Services/user.service';
import { Repositories } from 'src/app/Classes/repositories';
import { Users } from 'src/app/Classes/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchItem = 'sirgama';
  gitUser!: string;
  repoSearch!:string;
  user!: Users;
  repo!: Repositories;

  findUser(username: any){
    this.gitUser = '';
    this.searchItem = username;
    this.ngOnInit();
  }


  constructor(public githubUser: UserService, public gitRepos: UserService) { }




  ngOnInit(): void {
    this.githubUser.getUser(this.searchItem);
    this.user = this.githubUser.user;
    this.gitRepos.getrepos(this.searchItem);
    console.log(this.gitRepos)
  }

}
