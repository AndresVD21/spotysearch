import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album.model';
import { GetAlbum } from 'src/app/store/actions';
import { Track } from '../../models/track.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumID: string;
  album: Album;
  albumTracks: Track[];
  loading: boolean;
  loaded: boolean;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumID = params['id'];
      this.store.dispatch(new GetAlbum(this.albumID))
    })
    this.store.select('album')
      .subscribe(album => {
        this.album = album.album;
        this.albumTracks = album.songs;
        this.loading = album.loading;
        this.loaded = album.loaded;
      })
  }

}
