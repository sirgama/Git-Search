import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Classes/users';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  users: any;
  subscription: any = new Subscription;

  constructor(private profileService:ProfileService) {

  }

  ngOnInit(): void{
   

  }
}
