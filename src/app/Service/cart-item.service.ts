import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Cart_Item } from 'src/Table/table';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }

  create(val: any) {
    return this.http.post(this.APIURL + '/cartitem', val);
  }
  getAllCartItem(): Observable<Cart_Item[]> {
    return this.http.get<Cart_Item[]>(this.APIURL + '/cartitem');
  }
  updateCartItem(val: any) {
    return this.http.put(this.APIURL + '/cartitem/', val);
  }
  removeCartItem(id) {
    return this.http.delete(this.APIURL + '/cartitem/' + id).toPromise();
  }

}
