import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { FormControl } from '@angular/forms';
import { SpotifyService } from 'src/app/services/spotify.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  results: Artist[] = [];
  queryField: FormControl = new FormControl();

  constructor(
    private spotify: SpotifyService
  ) {
    
  }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((queryString) => queryString !== '' ? this.spotify.searchArtist(queryString):[])
    ).subscribe(   
      (response: any) => {
        console.log('RESPONSE',response)
        this.results = response.artists.items.length > 0 ? response.artists.items:[]
        console.log(this.results)
      },
      (error) => {
        console.error(error);
        this.results = []
      }   
    )
  }

  artistSelected(id: string) {
    console.log(id);
    this.results = [];
  }

 

}
