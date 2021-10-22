import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor( private http: HttpClient,
               private sharedService: SharedService) {
  }
  readonly APIURL = 'http://localhost:49347/api';
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  RestaurantId = new BehaviorSubject<any>({});
  orderStatus = new BehaviorSubject<any>({});

  amount: number;
  private order = [];
  private orderItemCount  = new BehaviorSubject(0);
  create(val: any) {
    return this.http.post(this.APIURL + '/Order', val);
  }
  getAllOrder(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Order');
  }
  updateOrder(val: any) {
    return this.http.put(this.APIURL + '/Order/', val);
  }
  removeOrder(id) {
    return this.http.delete(this.APIURL + '/Order/' + id).toPromise();
  }

  // create(orderObj) {
  //   let values = this.orderCollectionList.add(orderObj)
  //     .then((docRef) => {
  //       this.sharedService.orderId.next(docRef.id);
  //     })
  //   return values;
  // }

  getOrderBy(id){
    return this.http.get<any>(this.APIURL + '/Order' + id);
  }
  getOrderByDriverId(driverId){
    return this.http.get<any>(this.APIURL + '/Order' + driverId);
  }
  getCart() {
    return this.cart;
  }
  getOrders(){
    return this.order;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  getOrderItemCount(){
    return this.orderItemCount;
  }
  getRestaurantId() {
    return this.RestaurantId;
  }
  getOrderStatus() {
    return this.orderStatus;
  }
  addOrder(items) {
   this.order = [];
   this.amount = 0;
   this.order.forEach(el => {
      const index = this.order.indexOf(c => c.orderDetailsId === el.orderDetailsId);
      this.order.splice(index, 1);
    });
   this.orderItemCount.next(0);
   items.forEach(element => {
    this.amount = this.amount + element.amount;
    const data = {
        CookingTime: element.CookingTime,
        DeliveryTime: element.DeliveryTime,
        Description: element.Description,
        Name: element.Name,
        Price: element.Price,
        amount: element.amount,
        categoryId: element.categoryId,
        id: element.Food,
        picture: element.picture,
        restaurantId: element.restaurantId,
        type: element.type,
        orderDetailsId: element.orderDetailsId,
      };
    this.order.push(data);
      });
   this.orderItemCount.next(this.orderItemCount.value + this.amount);
  }
  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
