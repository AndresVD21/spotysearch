export class Track {
    external_urls: {
        spotify: string
    };
    id: string;
    name: string;
    preview_url: string;
    is_playable: boolean;

    constructor(external_urls, id: string, name: string, preview_url: string, is_playable: boolean) {
        this.external_urls = external_urls;
        this.id = id;
        this.name = name;
        this.preview_url = preview_url;
        this.is_playable = is_playable;
    }
}