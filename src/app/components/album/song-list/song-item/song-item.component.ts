import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../../models/track.model';
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {

  @Input() track: Track;
  @Input() albumName: string;
  @Input() albumImg: string;

  faPlayCircle = faPlayCircle;
  faStar = faStar;
  isFavorite: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.verifyFavorite();
    console.log(this.albumImg)
    // console.log(this.track)
  }

  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      let trackFormatted = {
        ...this.track,
        albumName: this.albumName,
        albumImg: this.albumImg
      }
      console.log(trackFormatted)
      let favoriteTracks: Track[] = JSON.parse(localStorage.getItem('favoriteTracks'));
      favoriteTracks.push(trackFormatted);
      localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));
    } else {
      let favoriteTracks: Track[] = JSON.parse(localStorage.getItem('favoriteTracks'));
      let favoriteTracksFiltered = favoriteTracks.filter((track: Track) => {
        return this.track.id !== track.id;
      })
      localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracksFiltered));
    }
  }

  verifyFavorite() {
    let favoriteTracks: Track[] = JSON.parse(localStorage.getItem('favoriteTracks'));
    favoriteTracks.map((track: Track) => {
      if (this.track.id === track.id) {
        this.isFavorite = true;
      }
    })
  }

}
