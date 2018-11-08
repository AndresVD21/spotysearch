import { Actions, Effect } from '@ngrx/effects';
import { SpotifyService } from 'src/app/services/spotify.service';
import * as artistsActions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsEffects {
    constructor(
        private actions$: Actions,
        public spotify: SpotifyService
    ) {}

    @Effect()
    loadArtists$ = this.actions$.ofType(artistsActions.GET_ARTISTS)
        .pipe(
            switchMap((action) => {
                const queryString = action['queryString'];
                return this.spotify.searchArtists(queryString)
                    .pipe(
                        map((artists: any) => {
                            const artistsArr = artists.artists.items
                            return new artistsActions.GetArtistsOk(artistsArr)
                        }),
                        catchError(error => {
                            console.log(error.error.error.message);
                            const objErr = {
                                url: error.url,
                                status: error.status,
                                message: error.error.error.message
                            }
                            return of(new artistsActions.GetArtistsFail(objErr))
                        })
                    );
            })
        )
}
