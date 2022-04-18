import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Seachbox } from 'src/app/Classes/seachbox';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchInfo = new Seachbox('');
    @Output() getName = new EventEmitter<Seachbox>();

    searching(data:any){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
