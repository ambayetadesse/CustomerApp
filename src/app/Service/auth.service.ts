import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // https: HttpClient;
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  getAllAccount(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/account', this.httpOptions);
  }
}
