import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from 'src/environments/environment.prod';
import { Cart, Order } from 'src/Table/table';
import { CartService } from './cart.service';
import { CartItemService } from './cart-item.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentDate: any;
  cartId: string;
  constructor(private http: HttpClient,
    private sharedService: SharedService,
    private cartService: CartService,
    private cart_itemService: CartItemService) {
    this.getAllCart();
  }
  readonly APIURL = environment.apiURL;
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  RestaurantId = new BehaviorSubject<any>({});
  orderStatus = new BehaviorSubject<any>({});

  amount: number;
  private order = [];
  private orderItemCount = new BehaviorSubject(0);
  async create(val: any) {
    return await this.http.post(this.APIURL + '/order', val);
  }
  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.APIURL + '/order');
  }
  updateOrder(val: any) {
    return this.http.put(this.APIURL + '/order/', val);
  }
  removeOrder(id) {
    return this.http.delete(this.APIURL + '/order/' + id).toPromise();
  }
  getOrderBy(id) {
    return this.http.get<any>(this.APIURL + '/order' + id);
  }
  getOrderByDriverId(driverId) {
    return this.http.get<any>(this.APIURL + '/order' + driverId);
  }
  getCart() {
    return this.cart;
  }
  getOrders() {
    return this.order;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  getOrderItemCount() {
    return this.orderItemCount;
  }
  getRestaurantId() {
    return this.RestaurantId;
  }
  getOrderStatus() {
    return this.orderStatus;
  }
  getAllCart() {
    this.cartService.getAllCart().subscribe(res => {
      if (res.length > 0) {
        this.cartId = res[0].id;
      }
    })
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
    console.log(product);
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
      let data = {
        foodId: product.id,
        cartId: this.cartId,
        price: product.price,
        discount: 0,
        quantity: product.amount,
        createdAt: product.cookingTime,
        updatedAt: this.currentDate,
        content: ""
      }
      this.cart_itemService.create(data).subscribe(res => {
        console.log(res.toString());
      });
    }
    else {
      this.updateCartItem(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        this.updateCartItem(product.id);
        if (p.amount === 0) {
          this.cart.splice(index, 1);
          this.removeCartItem(product)
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
        this.removeCartItem(product);
      }
    }
  }
  updateCartItem(product) {
    let data = {
      foodId: product.id,
      cartId: this.cartId,
      price: product.price,
      discount: 0,
      quantity: product.amount,
      createdAt: product.cookingTime,
      updatedAt: this.currentDate,
      content: ""
    }
    this.cart_itemService.updateCartItem(data).subscribe(res => {
      console.log(res.toString());
    });
  }
  removeCartItem(product) {
    this.cart_itemService.removeCartItem(product.id).then(res => {
      console.log(res.toString());
    })
  }
}
