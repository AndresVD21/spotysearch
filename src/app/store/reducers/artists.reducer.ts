import { Artist } from 'src/app/models/artist.model';
import * as fromArtists from '../actions';

export interface ArtistsState {
    artists: Artist[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: ArtistsState = {
    artists: [],
    loaded: false,
    loading: false,
    error: null
}

export function artistsReducer(state = initState, action: fromArtists.artistsActions): ArtistsState {
    switch (action.type) {
        case fromArtists.GET_ARTISTS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case fromArtists.GET_ARTISTS_OK:
            return {
                ...state,
                loaded: true,
                loading: false,
                artists: [...action.artists]
            };
        case fromArtists.GET_ARTISTS_FAIL:
            return {
                ...state,
                loaded: true,
                loading: false,
                error: {
                    status: action.error.status,
                    message: action.error.message,
                    url: action.error.url
                }
            }
        case fromArtists.RESET_ARTISTS:
            return initState;
    
        default:
            return state;
    }
}

