import { ArtistImage } from './artist-image.model';
export class Artist {
    external_urls: {
        spotify: string
    }
    id: string;
    images: ArtistImage[];
    name: string;

    constructor(external_urls, id: string, images: ArtistImage[], name: string) {
        this.external_urls = {...external_urls};
        this.id = id;
        this.images = [...images];
        this.name = name;
    }
}