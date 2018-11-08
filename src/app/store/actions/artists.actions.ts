import { Action } from '@ngrx/store';
import { Artist } from '../../models/artist.model';


export const GET_ARTISTS = '[Artists] Get Artists';
export const GET_ARTISTS_FAIL = '[Artists] Get Artists Fail';
export const GET_ARTISTS_OK = '[Artists] Get Artists Ok';
export const RESET_ARTISTS = '[Artists] Reset Artists';

export class GetArtists implements Action {
    readonly type = GET_ARTISTS;
    constructor(public queryString: string) {}
}

export class GetArtistsFail implements Action {
    readonly type = GET_ARTISTS_FAIL;
    constructor(public error: any) {}
}

export class GetArtistsOk implements Action {
    readonly type = GET_ARTISTS_OK;
    constructor(public artists: Artist[]) {}
}

export class ResetArtists implements Action {
    readonly type = RESET_ARTISTS;
}

export type artistsActions = GetArtists
                        | GetArtistsFail
                        | GetArtistsOk
                        | ResetArtists