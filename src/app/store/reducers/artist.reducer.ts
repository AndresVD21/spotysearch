import { Artist } from 'src/app/models/artist.model';
import * as fromArtist from '../actions';
import { Album } from '../../models/album.model';

export interface ArtistState {
    artist: Artist;
    albums: Album[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: ArtistState = {
    artist: null,
    albums: [],
    loaded: false,
    loading: false,
    error: null
}

export function artistReducer(state = initState, action: fromArtist.artistActions): ArtistState {
    switch (action.type) {
        case fromArtist.GET_ARTIST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case fromArtist.GET_ARTIST_OK:
            return {
                ...state,
                loaded: true,
                loading: false,
                artist: action.artist
            };
        case fromArtist.GET_ARTIST_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.error.status,
                    message: action.error.error.message,
                    url: action.error.url
                }
            };
        case fromArtist.GET_ARTIST_ALBUMS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromArtist.GET_ARTIST_ALBUMS_OK:
            return {
                ...state,
                loaded: true,
                loading: false,
                albums: [...action.albums]
            }
        case fromArtist.GET_ARTIST_ALBUMS_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.error.status,
                    message: action.error.error.message,
                    url: action.error.url
                }
            };
        case fromArtist.RESET_ARTIST:
            return initState;
    
        default:
            return state;
    }
}

