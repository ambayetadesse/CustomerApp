import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cart, Cart_Item, Food, Order, Restaurant } from 'src/Table/table';
import { CartItemService } from '../Service/cart-item.service';
import { CartService } from '../Service/cart.service';
import { FoodService } from '../Service/food.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any[];
  listOfCart: Cart[];
  listOfCartItem: any[] = [];
  listOfFood: Food[];
  Total: number;
  restaurantId: any;
  listOfRestaurant: Restaurant[];
  currentDate = new Date().toISOString();
  statusDriver: { val: string; isChecked: boolean; }[];
  statusRestaurant: { val: string; isChecked: boolean; }[];
  status: { val: string; isChecked: boolean; }[];
  orderDetailService: any;
  router: any;
  loader: any;
  listOfOrder: Order[];
  constructor(private orderService: OrderService, private cartService: CartService,
    private cartItemService: CartItemService, private foodService: FoodService,
    private alertCtrl: AlertController, private restaurantService: RestaurantService) {
    this.statusDriver = [
      { val: 'picked', isChecked: false },
      { val: 'start moving', isChecked: false },
      { val: 'delivered', isChecked: false }
    ];
    this.statusRestaurant = [
      { val: 'order received', isChecked: true },
      { val: 'start cooking', isChecked: false },
      { val: 'cooked', isChecked: false },
      { val: 'ready to service', isChecked: false }
    ];
    this.status = [
      { val: 'Accept', isChecked: false },
      { val: 'Reject', isChecked: false }
    ];
  }

  ngOnInit() {
    this.cart = this.orderService.getCart();
    console.log(this.cart)
    this.getCart();
    this.getCartItem();
    this.getFood();
    this.getRestaurant();
  }
  getCart() {
    this.cartService.getAllCart().subscribe(res => {
      this.listOfCart = res;
    })
  }
  getFood() {
    this.foodService.getAllFood().subscribe(res => {
      this.listOfFood = res;
    })
  }
  getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    });
  }

  getCartItem() {
    this.cartItemService.getAllCartItem().subscribe(res => {
      if (this.listOfFood != undefined) {
        res.forEach(ele => {
          let food = this.listOfFood.find(c => c.id == +ele.foodId)
          if (food != undefined) {
            let data = {
              cartId: ele.cartId,
              content: ele.content,
              restaurantId: "3",
              createdAt: ele.createdAt,
              discount: ele.discount,
              foodName: food.name,
              foodId: food.id,
              id: ele.id,
              amount: ele.quantity,
              slug: food.picture,
              price: ele.price,
              quantity: ele.quantity,
              updatedAt: ele.updatedAt
            }
            this.listOfCartItem.push(data);
            this.cartService.addToCart(data);
          }
        })
      }
      else {
        this.refreshFood();
      }
    })
  }
  refreshFood() {
    setTimeout(() => {
      this.getFood();
      this.getCartItem();
    }, 200);
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
    this.presentAlertConfirm(product);
  }

  getTotal() {
    return this.listOfCartItem.reduce((i, j) => i + j.amount * j.price, 0);
  }

  getGrandTotal() {
    return this.getTotal();
  }
  async presentAlertConfirm(product) {
    const alert = await this.alertCtrl.create({
      header: 'Clear cart !',
      message: '<strong>Are you sure you want to remove all items in your cart ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.cartService.removeProduct(product);
          }
        }
      ]
    });
    await alert.present();
  }
  async order(cart) {
    this.Total = 0;
    cart.forEach(element => {
      this.restaurantId = element.restaurantId;
    });
    const res = this.listOfRestaurant.find(c => c.id === +this.restaurantId);
    const order = {
      restaurantId: res.accountId.toString(),
      dateTime: this.currentDate,
      deliveryTime: this.currentDate,
      customer: localStorage.getItem('userId'),
      location: res.location, // to insert loging user (customer) of location
      orderStatuses: this.statusDriver,
      total: this.getGrandTotal(),
      driver: 'null',
      vehicle: 'null',
      orderLocation: 'null', // or droupLocation
      restaurantStatuses: this.statusRestaurant,
      customerStatus: 'true',
      statuses: this.status
    };
    (await this.orderService.create(order)).subscribe(async () => {
      //alert(res.toString());
      this.getOrder();
      (await this.orderService.getAllOrder()).subscribe(async res => {
        //  console.log(res);
        cart.forEach(element => {
          this.restaurantId = element.restaurantId;
          this.Total = this.Total + (element.Price * element.amount);
          const orderDetails = {
            orderId: res[0].id,
            foodId: element.id,
            qty: element.amount,
            price: element.price
          };
          this.orderDetailService.create(orderDetails).subscribe(async res => {
            console.log(res.toString());
            this.router.navigate(['/menu/order']);
          }, async (err) => {
            await this.loader.dismiss().then();
            console.log(err)
          });
        });
      }, async (err) => {
        await this.loader.dismiss().theen();
        console.log(err);
      });
      this.presentAlert('Add order succesfuly');
    });

  }
  async getOrder() {
    (await this.orderService.getAllOrder()).subscribe(async res => {
      this.listOfOrder = await res;
    })
  }
  async presentAlert(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Order',
      // subHeader: 'Subtitle',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
