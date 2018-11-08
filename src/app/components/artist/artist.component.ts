import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Artist } from 'src/app/models/artist.model';
import { Album } from '../../models/album.model';
import { Router } from '@angular/router';
import { GetArtistAlbums } from '../../store/actions/artist.actions';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: Artist;
  albums: Album[];
  artistGenres: string;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('artist')
      .subscribe(artist => {
        this.artist = artist.artist;
        this.albums = artist.albums;
        if (artist.artist) {
          this.artistGenres = artist.artist.genres.join('|').replace(/\|/g, ' | ');
          // this.store.dispatch(new GetArtistAlbums(artist.artist.id));
        }
      });
  }

  goToArtist() {
    this.router.navigate([this.artist.external_urls.spotify])
  }

}
