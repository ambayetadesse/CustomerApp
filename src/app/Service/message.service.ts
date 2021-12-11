import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/message', val);
  }
  getAllMessage(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/message');
  }
  updateMessage(val: any) {
    return this.http.put(this.APIURL + '/message/', val);
  }
  removeMessage(id) {
    return this.http.delete(this.APIURL + '/message/' + id).toPromise();
  }
}
