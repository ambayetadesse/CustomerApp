import { HttpClient } from '@angular/common/http';
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
  getAllAccount(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/account');
  }
}
