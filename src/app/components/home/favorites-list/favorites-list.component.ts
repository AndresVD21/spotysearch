import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {

  favoriteTracks: Track[];
  constructor() { }

  ngOnInit() {
    this.favoriteTracks = JSON.parse(localStorage.getItem('favoriteTracks'));
  }

}
