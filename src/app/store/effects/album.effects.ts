import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as albumActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { of } from 'rxjs'
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';


@Injectable()
export class ArtistEffects {

    constructor(
        private actions$: Actions,
        public spotify: SpotifyService
    ) { }

    // @Effect()
    // loadAlbum$ = this.actions$.ofType(albumActions.GET_ALBUM)
    //     .pipe(
    //         switchMap(action => {
    //             const id = action['id'];
    //             return this.spotify.
    //         })
    //     )


    // @Effect()
    // loadArtist$ = this.actions$.ofType(artistActions.GET_ARTIST)
    //     .pipe(
    //         switchMap((action) => {
    //             const id = action['id'];
    //             return this.spotify.searchArtist(id)
    //                 .pipe(
    //                     switchMap((artist:Artist) => [
    //                         new artistActions.GetArtistOk(artist),
    //                         new artistActions.GetArtistAlbums(artist.id)
    //                     ]),
    //                     // map((artist:Artist) => new artistActions.GetArtistOk(artist)),
    //                     catchError(error => {
    //                         const objErr = {
    //                             url: error.url,
    //                             status: error.status,
    //                             message: error.error.error.message
    //                         }
    //                         return of(new artistActions.GetArtistFail(objErr))
    //                     })
    //                 );
    //         })
    //     );

}