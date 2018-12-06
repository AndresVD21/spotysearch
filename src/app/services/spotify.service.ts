import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  // private clientID: string = '0c90724e066946bbb071560437c97a06';
  private baseURL: string = `https://api.spotify.com/v1`;
  private accessToken: string = 'BQBFlRVVuJohImKL6shPRD7w86KOFqGscjzUault3gFV1ip85X56At_pEYqjw8pylbfcglsBPU6Cn5YPLVAnT6nLlSX1SKSsjmfJ1aubeFM5EzWGXcolCGfecUYyDEp1Yg1QOVQ_YKBwNbezdi35_o-YVTAj8kL2';

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
