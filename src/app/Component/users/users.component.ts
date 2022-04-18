import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userInput!:string;
  public gitProfile: any;
  public gitRepos!: any[];

  constructor(private userService:UserService) { }

  public searchUser(userInput:string){
    this.userService.getProfile(this.userInput).subscribe((res: any) =>{
      this.gitProfile = res.name;
    });
    this.userService.getrepos(this.userInput).subscribe((res:any) =>{
      this.gitRepos = res.name;
    });
  }


  ngOnInit(): void {
  }

}
// function next(next: any, arg1: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }

