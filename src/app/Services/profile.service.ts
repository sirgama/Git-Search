import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Classes/users';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users: Users;
  constructor(private http:HttpClient) {
    this.users = new Users("", "", "", "", "", 0, 0)
  }
  profileRequest(){
    interface ApiResponse {
      login: any;
      html_url: any;
      avatar_url: any;
      name: any;
      bio: any;
      followers: any;
      following: any;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/sirgama").toPromise().then(response=>{
        this.users.login = response?.login
        this.users.html_url = response?.html_url
        this.users.avatar_url = response?.avatar_url
        this.users.name = response?.name
        this.users.bio = response?.bio
        this.users.followers = response?.followers
        this.users.following = response?.following

        resolve(response)
      },
      error=>{
        this.users.login = "response?.login"
        this.users.html_url = "response?.html_url"
        this.users.avatar_url = "response?.avatar_url"
        this.users.name = "response?.name"
        this.users.bio = "response?.bio"
        this.users.followers = 0
        this.users.following = 0

        reject(error)
      }
      )
    })
    return promise;
  }
}
