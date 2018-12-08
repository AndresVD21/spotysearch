import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetAlbumOk } from 'src/app/store/actions';
import { ResetArtist } from '../../../../store/actions/artist.actions';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  albumSelected(id: string) {
    this.router.navigate([`album/${id}`]);
    this.store.dispatch(new GetAlbumOk(this.album));
  }

}
