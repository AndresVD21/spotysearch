import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetArtists, ResetArtists } from '../../store/actions/artists.actions';
import { GetArtist } from 'src/app/store/actions';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  results: Artist[] = [];
  queryField: FormControl = new FormControl();
  @Input() inToolbar: boolean;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.queryFieldChanges();
    this.store.select('artists')
      .subscribe(artists => {
        this.results = artists.artists;
      })
    // this.store.select('artist')
    //   .subscribe(artist => {
    //     if(artist.loaded && !artist.loading) {
    //       this.store.dispatch(new ResetArtists());
    //       this.router.navigate([`/artist/${artist.artist.id}`]);
    //     }
    //   })
  }

  queryFieldChanges() {
    this.queryField.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((queryString) => {
        if (queryString !== '') {
          // return this.spotify.searchArtists(queryString);
          this.store.dispatch(new GetArtists(queryString));
          return [];
        } else {
          this.results = [];
          return [];
        }
      })
    ).subscribe()
  }

  artistSelected(id: string) {
    console.log(id);
    this.store.dispatch(new GetArtist(id));
    this.router.navigate([`/artist/${id}`]).then(
      () => {
        this.store.dispatch(new ResetArtists());
      }
    );
    this.results = [];
  }

 

}
