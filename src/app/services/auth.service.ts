import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = 'https://accounts.spotify.com/api/token';
  private refreshToken: string = 'AQAtmIMd_GXXbkft02jYlWh3OoKwHVCIHAcrbxjjuL5arAaz89-9xsWiWAXlOC8GvzgbGVnW-Jjh9nuGuJTtwHqyfrzXrTV_7arxHPPyrfvp1UKqViQl2r3s7JyMkPsHKNc7WQ';
  private authorization: string = 'MGM5MDcyNGUwNjY5NDZiYmIwNzE1NjA0MzdjOTdhMDY6YmNkMTA2MzI3YTBkNDdiNmI4MTE2YTJjYzUxNGM2ZGI=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Basic ${this.authorization}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  refreshAccessToken() {
    const body = {
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken
    }

    this.http.post(this.baseURL, body, this.httpOptions).subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
