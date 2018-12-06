import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as albumActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { of } from 'rxjs'
import { Album } from '../../models/album.model';
import { Track } from '../../models/track.model';


@Injectable()
export class AlbumEffects {

    constructor(
        private actions$: Actions,
        public spotify: SpotifyService
    ) { }

    @Effect()
    loadAlbum$ = this.actions$.ofType(albumActions.GET_ALBUM)
        .pipe(
            switchMap(action => {
                const id = action['id'];
                return this.spotify.searchAlbum(id)
                    .pipe(
                        switchMap((album: Album) => [
                            new albumActions.GetAlbumOk(album),
                            new albumActions.GetAlbumSongs(album.id)
                        ]),
                        catchError(error => {
                            const objErr = {
                                url: error.url,
                                status: error.status,
                                message: error.error.error.message
                            }
                            return of(new albumActions.GetAlbumFail(objErr))
                        })
                    )
            })
        )

    @Effect()
    loadAlbumTracks$ = this.actions$.ofType(albumActions.GET_ALBUM_SONGS)
        .pipe(
            switchMap(action => {
                const id = action['id'];
                return this.spotify.searchAlbumTracks(id)
                    .pipe(
                        map((tracks: any) => {
                            const tracksArr: Track[] = tracks.items;
                            return new albumActions.GetAlbumSongsOk(tracksArr);
                        }),
                        catchError(error => {
                            const objErr = {
                                url: error.url,
                                status: error.status,
                                message: error.error.error.message
                            }
                            return of(new albumActions.GetAlbumSongsFail(objErr))
                        })
                    )
            })
        )

}