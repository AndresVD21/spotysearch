import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import Swal from 'sweetalert2';
import { Track } from './models/track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spotysearch';

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    let favoriteTracks: Track[] = JSON.parse(localStorage.getItem('favoriteTracks'));
    if(!favoriteTracks) {
      favoriteTracks = []
      localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));
    }
    this.store.subscribe(
      state => {
        if (state.artists.error) {
          Swal('[Artists] Error', state.artists.error.message, 'error');
        } else if(state.artist.error) {
          Swal('[Artist] Error', state.artist.error.message, 'error');
        }
      }
    )
  }
}
