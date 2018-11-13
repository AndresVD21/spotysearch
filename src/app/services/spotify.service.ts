import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  // private clientID: string = '0c90724e066946bbb071560437c97a06';
  private baseURL: string = `https://api.spotify.com/v1`;
  private accessToken: string = 'BQBtsg3RwaGB2ZO34DTgEyZqca7D_UWSuXWESmHUg-zmQsOokrbe3rxq9rDaIGRo3WRInek0EIDiB3imAuSqOnv6g7cZfKXJY3LqzoThnAv_6uhRfRDOowcYtApC-WwhtZSWX-LBIwuIIJCIjYTPSR6zb76fle0i';

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


}
