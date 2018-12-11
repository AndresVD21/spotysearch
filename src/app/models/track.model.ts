import { Artist } from './artist.model';
export class Track {
    external_urls: {
        spotify: string
    };
    id: string;
    name: string;
    preview_url: string;
    is_playable: boolean;
    artists: Artist[];
    albumName: string;
    albumImg: string;

    constructor(external_urls, id: string, name: string, preview_url: string, is_playable: boolean, artists: Artist[], albumName: string) {
        this.external_urls = external_urls;
        this.id = id;
        this.name = name;
        this.preview_url = preview_url;
        this.is_playable = is_playable;
        this.artists = artists;
        this.albumName = albumName;
    }
    
}