import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../Classes/users';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { Repositories } from '../Classes/repositories';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  repo!: Repositories;
  user!: Users;
  repoSearch: any;
  newRepo:any;


  constructor(private http:HttpClient) {
    this.user = new Users('','','','',0,0);
    this.repo = new Repositories('','','');
  }


  getUser(searchItem: any ){
    interface ApiResponse {
      name: string;
      html_url: string;
      login: string;
      avatar_url: string;
      followers: number;
      following: number;

    }

    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(`https://api.github.com/users/`+ searchItem + `?client_id=` + environment.gitToken ).toPromise()
      .then((feedback:any)  =>{
        this.user.name = feedback.name;
        this.user.avatar_url = feedback.avatar_url;
        this.user.html_url = feedback.html_url;
        this.user.login = feedback.login;
        this.user.followers = feedback.followers;
        this.user.following = feedback.following;
        console.log(feedback.followers)

        resolve();

      }, error =>{
        this.user.login="Failed to find username"
        console.log("Error")
        reject(error);
      }
      );
    });
    return promise;

  }


  // To get GITHUB Repos
  getrepos(searchItem: any){
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
    }
    let repoPromise = new Promise<void>((resolve)=>{
      this.http.get<ApiResponse>(`https://api.github.com/users/`+ searchItem+ `/repos?order=created&sort=asc?client_id=` + environment.gitToken).toPromise().then(getRepoResponse =>{
        this.newRepo = getRepoResponse;
        console.log(this.newRepo)
      resolve();
      })

     })
     return repoPromise;
  }



}
