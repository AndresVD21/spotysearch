import { Album } from '../../models/album.model';
import * as fromAlbum from '../actions';

export interface AlbumState {
    album: Album;
    songs: any[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: AlbumState = {
    album: null,
    songs: [],
    loaded: false,
    loading: false,
    error: null
}

export function albumReducer(state = initState, action: fromAlbum.albumActions) {
    switch (action.type) {
        case fromAlbum.GET_ALBUM:
            return {
                ...state,
                loading: true
            };
        case fromAlbum.GET_ALBUM_OK:
            return {
                ...state,
                loaded: true,
                loading: false,
                album: action.album
            };
        case fromAlbum.GET_ALBUM_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.error.status,
                    message: action.error.error.message,
                    url: action.error.url
                }
            }

        case fromAlbum.GET_ALBUM_SONGS:
            return {
                ...state,
                loading: true
            }
        
        case fromAlbum.GET_ALBUM_SONGS_OK:
            return {
                ...state,
                loaded: true,
                loading: false,
                songs: [...action.songs]
            }

        case fromAlbum.GET_ALBUM_SONGS_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.error.status,
                    message: action.error.error.message,
                    url: action.error.url
                }
            }

        case fromAlbum.RESET_ALBUM:
            return initState;
            
    
        default:
            return state;
    }
}
