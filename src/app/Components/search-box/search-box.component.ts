import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();
  constructor() { }

  ngOnInit(): void {
  }

}
