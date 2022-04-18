import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {
  }
  getProfile(search: any){
    let apiSource = `https://api.github.com/users/${search}?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
    return this.http.get(apiSource).pipe();
  }


  // To get GITHUB Repos
  getrepos(search: any): Observable<any[]>{
    let apiSource = `https://api.github.com/users/${search}/repos?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
    return this.http.get<any[]>(apiSource).pipe();
  }


}
