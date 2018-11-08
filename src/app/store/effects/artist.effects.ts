import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as artistActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { of } from 'rxjs'
import { Artist } from '../../models/artist.model';

@Injectable()
export class ArtistEffects {

    constructor(
        private actions$: Actions,
        public spotify: SpotifyService
    ) { }

    @Effect()
    loadArtist$ = this.actions$.ofType(artistActions.GET_ARTIST)
        .pipe(
            switchMap((action) => {
                const id = action['id'];
                return this.spotify.searchArtist(id)
                    .pipe(
                        map((artist:Artist) => new artistActions.GetArtistOk(artist)),
                        catchError(error => of(new artistActions.GetArtistFail(error)))
                    );
            })
        );

}