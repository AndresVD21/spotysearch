import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../../models/track.model';

@Component({
  selector: 'app-favorite-song',
  templateUrl: './favorite-song.component.html',
  styleUrls: ['./favorite-song.component.scss']
})
export class FavoriteSongComponent implements OnInit {

  @Input() track: Track;
  artistName: string;

  constructor() { }

  ngOnInit() {
    this.artistName = this.track.artists[0].name;
  }

  deleteFavoriteTrack() {
    
  }

  albumClicked() {
    console.log(this.track);
  }

}
