import { Action } from '@ngrx/store';
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';


export const GET_ARTIST = '[Artist] Get Artist';
export const GET_ARTIST_FAIL = '[Artist] Get Artist Fail';
export const GET_ARTIST_OK = '[Artist] Get Artist Ok';
export const GET_ARTIST_ALBUMS = '[Artist] Get Artist Albums';
export const GET_ARTIST_ALBUMS_OK = '[Artist] Get Artist Albums Ok';
export const GET_ARTIST_ALBUMS_FAIL = '[Artist] Get Artist Albums Fail';
export const RESET_ARTIST = '[Artist] Reset Artist';


export class GetArtist implements Action {
    readonly type = GET_ARTIST;
    constructor(public id: string) {}
}

export class GetArtistOk implements Action {
    readonly type = GET_ARTIST_OK;
    constructor(public artist: Artist) {}
}

export class GetArtistFail implements Action {
    readonly type = GET_ARTIST_FAIL;
    constructor(public error: any) {}
}

export class GetArtistAlbums implements Action {
    readonly type = GET_ARTIST_ALBUMS;
}

export class GetArtistAlbumsOk implements Action {
    readonly type = GET_ARTIST_ALBUMS_OK;
    constructor(public albums: Album[]) {}
}

export class GetArtistAlbumsFail implements Action {
    readonly type = GET_ARTIST_ALBUMS_FAIL;
    constructor(public error: any) {}
}

export class ResetArtist implements Action {
    readonly type = RESET_ARTIST;
}



export type artistActions = GetArtist
                        | GetArtistOk
                        | GetArtistFail
                        | GetArtistAlbums
                        | GetArtistAlbumsOk
                        | GetArtistAlbumsFail
                        | ResetArtist
