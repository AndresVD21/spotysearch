import { Image } from './image.model';
export class Artist {
    external_urls: {
        spotify: string
    }
    id: string;
    images: Image[];
    name: string;
    genres: string[];

    constructor(external_urls, id: string, images: Image[], name: string, genres: string[]) {
        this.external_urls = {...external_urls};
        this.id = id;
        this.images = [...images];
        this.name = name;
        this.genres = [...genres];
    }
}