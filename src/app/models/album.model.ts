import { Image } from './image.model';

export class Album {
    external_urls: {
        spotify: string
    }
    id: string;
    images: Image[];
    name: string;
    release_date: string;

    constructor(external_urls, id: string, images: Image[], name: string, release_date: string) {
        this.external_urls = {...external_urls};
        this.id = id;
        this.images = [...images];
        this.name = name;
        this.release_date = release_date;
    }
}