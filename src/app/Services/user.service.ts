import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../Classes/users';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Users;
  repoSearch

  constructor(private http:HttpClient) {
  }
  getProfile(searchItem: string){
  }


  // To get GITHUB Repos
  getrepos(searchItem: string){
  }


}
