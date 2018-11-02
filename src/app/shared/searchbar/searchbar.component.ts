import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  items = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ];

  number = new Observable<number>();

  constructor(
    
  ) {
    this.number.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

 

}
