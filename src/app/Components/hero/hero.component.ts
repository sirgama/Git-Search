import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Classes/users';
import { ProfileService } from 'src/app/Services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  constructor(private profileService:ProfileService) {
   }

  ngOnInit(): void{

  }

}
