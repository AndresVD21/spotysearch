import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../models/album.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  @Input() albums: Album[];
  loading: boolean;
  loaded: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('artist')
      .subscribe(artist => {
        this.loading = artist.loading;
        this.loaded = artist.loaded;
      })
  }

}
