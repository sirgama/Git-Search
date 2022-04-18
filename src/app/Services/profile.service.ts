import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Classes/users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users: Users;
  constructor(private http:HttpClient) {
    this.users = new Users("", "", "", "", "", 0, 0)
  }
  
}
