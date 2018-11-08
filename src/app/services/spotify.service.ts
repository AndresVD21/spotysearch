import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  // private clientID: string = '0c90724e066946bbb071560437c97a06';
  private baseURL: string = `https://api.spotify.com/v1`;
  private accessToken: string = 'BQBXReUoWqVzbcE2WTzYAlJU5PYSiwB42Xa41L8S_x8i4yPeoZNj_A983kX06OhlFu1CKDksx2DmSZvo25NsKUFrO8es8MPUG2F-m3p3y_GoDtb-wBIZcCa2Pcx18CDIsty6SGpN6QMpxyIw1frK2zaulrH3cGZi';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  searchArtists(queryString: string) {
    return this.http.get(`${this.baseURL}/search?type=artist&limit=5&q=${queryString.replace(' ','+')}`, this.httpOptions);
  }

  searchArtist(id: string) {
    return this.http.get(`${this.baseURL}/artists/${id}`, this.httpOptions);
  }


}
