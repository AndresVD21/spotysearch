import { Action } from '@ngrx/store';
import { Album } from '../../models/album.model';


export const GET_ALBUM = '[Album] Get Album';
export const GET_ALBUM_OK = '[Album] Get Album Ok';
export const GET_ALBUM_FAIL = '[Album] Get Album Fail';
export const GET_ALBUM_SONGS = '[Album] Get Album Songs';
export const GET_ALBUM_SONGS_OK = '[Album] Get Album Songs Ok';
export const GET_ALBUM_SONGS_FAIL = '[Album] Get Album Songs Fail';

export class GetAlbum implements Action {
    readonly type = GET_ALBUM;
    constructor(public id: string) {}
}

export class GetAlbumOk implements Action {
    readonly type = GET_ALBUM_OK;
    constructor(public album: Album) {}
}

export class GetAlbumFail implements Action {
    readonly type = GET_ALBUM_FAIL;
    constructor(public error: any) {}
}

export class GetAlbumSongs implements Action {
    readonly type = GET_ALBUM_SONGS;
    constructor(public id: string) {}
}

export class GetAlbumSongsOk implements Action {
    readonly type = GET_ALBUM_SONGS_OK;
    constructor(public songs: any) {}
}

export class GetAlbumSongsFail implements Action {
    readonly type = GET_ALBUM_SONGS_FAIL;
    constructor(public error: any) {}
}

export type albumActions = GetAlbum
                        | GetAlbumOk
                        | GetAlbumFail
                        | GetAlbumSongs
                        | GetAlbumSongsOk
                        | GetAlbumSongsFail





