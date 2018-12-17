import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  // private clientID: string = '0c90724e066946bbb071560437c97a06';
  private baseURL: string = `https://api.spotify.com/v1`;
  private accessToken: string = 'BQBsiN4z7FjSe8Hn82uixTPyYdbs34OvpQ9p2IbwWnNSYZC1IblwsXKt54uuf-DVxGiV0ZQHtxya9wkXQYtswaaycycJlaUCEvh3tbhiv0w-Abv0JeEsyO0Ie4HUbpxr7Z_exwL3n_57BzulQ09o8MnZQdweQg3P';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };

  //https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR/albums?limit=4&market=CO

  constructor(
    private http: HttpClient
  ) { }

  searchArtists(queryString: string) {
    return this.http.get(`${this.baseURL}/search?type=artist&limit=5&q=${queryString.replace(' ','+')}`, this.httpOptions);
  }

  searchArtist(id: string) {
    return this.http.get(`${this.baseURL}/artists/${id}`, this.httpOptions);
  }

  searchArtistAlbums(id: string) {
    return this.http.get(`${this.baseURL}/artists/${id}/albums?market=CO`, this.httpOptions);
  }

  searchAlbum(id: string) {
    return this.http.get(`${this.baseURL}/albums/${id}?market=CO`, this.httpOptions)
  }

  searchAlbumTracks(id: string) {
    return this.http.get(`${this.baseURL}/albums/${id}/tracks?market=CO`, this.httpOptions)
  }


}
