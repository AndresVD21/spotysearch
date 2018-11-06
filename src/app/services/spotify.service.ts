import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  // private clientID: string = '0c90724e066946bbb071560437c97a06';
  private baseURL: string = `https://api.spotify.com/v1/search?type=artist&limit=5`;
  private accessToken: string = 'BQCGMfQK3GXA9m9vlWskoWjT-hpcHrz--G0SVM5j_d8CMiRB9QeF9LWyuORub61VvFQ9HpChbYHRQpV32cCygkL7U514bTXtgKNjjjIsO9i-N2ZreZZP9DACZXlhsHrP8YmqsVwKhBPFJjnfh5BZZ0RElG_xeCGI';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  searchArtist(queryString: string) {
    // console.log(queryString)
    return this.http.get(`${this.baseURL}&q=${queryString.replace(' ','+')}`, this.httpOptions)
  }
}
