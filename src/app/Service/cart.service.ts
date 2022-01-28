import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Cart } from 'src/Table/table';
import { BehaviorSubject, Observable } from 'rxjs'
import { CartItemService } from './cart-item.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly APIURL = environment.apiURL;
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  cartId: any;
  currentDate = new Date().toISOString();
  constructor(private http: HttpClient, private cart_itemService: CartItemService) {
  }

  create(val: any) {
    return this.http.post(this.APIURL + '/cart', val);
  }
  getAllCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.APIURL + '/cart');
  }
  updateCart(val: any) {
    return this.http.put(this.APIURL + '/cart/', val);
  }
  removeCart(id) {
    return this.http.delete(this.APIURL + '/cart/' + id).toPromise();
  }
  addToCart(item) {
    this.cart.push(item);
    //console.log(this.cart)
  }
  addProduct(product) {
    //console.log(product);
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
      this.cart_itemService.create(data).subscribe(() => {
      });
    }
    else {
      this.updateCartItem(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount -= 1;
        this.updateCartItem(product);
        if (p.amount === 0) {
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
    console.log(product)
    let data = {
      id: product.id,
      foodId: product.foodId,
      cartId: 0,
      price: product.price,
      discount: 0,
      quantity: product.amount,
      createdAt: this.currentDate,
      updatedAt: this.currentDate,
      content: ""
    }
    this.cart_itemService.updateCartItem(data).subscribe(() => {
    });
  }
  removeCartItem(product) {
    this.cart_itemService.removeCartItem(product.id).then(() => {
    })
  }
}
