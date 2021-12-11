import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/vehicle', val);
  }
  getAllVehicle(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/vehicle');
  }
  updateVehicle(val: any) {
    return this.http.put(this.APIURL + '/vehicle/', val);
  }
  removeVehicle(id) {
    return this.http.delete(this.APIURL + '/vehicle/' + id).toPromise();
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }
}
