import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    artists: reducers.ArtistsState;
    artist: reducers.ArtistState;
};

export const appReducers: ActionReducerMap<AppState> = {
    artists: reducers.artistsReducer,
    artist: reducers.artistReducer
}
