import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Food, Order, OrderDetail } from 'src/Table/table';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-customer-option',
  templateUrl: './customer-option.page.html',
  styleUrls: ['./customer-option.page.scss'],
})
export class CustomerOptionPage implements OnInit {
  @Input() public data;
  @Input() public id;
  listOfOrder: Order[];
  isLoading: boolean;
  countItems: number;
  cart: any[];
  listOfOrderDetails: OrderDetail[];
  listOfFood: Food[];
  constructor(private modalControler: ModalController,
    private orderService: OrderService,
    private foodService: FoodService,
    private orderDetailsService: OrderDetailService,
    private router: Router) { }

  async ngOnInit() {
    (await this.orderService.getAllOrder()).subscribe(res => {
      this.listOfOrder = res;
    })
    this.getFood();
    this.getOrderDetails();
  }
  getFood() {
    this.foodService.getAllFood().subscribe(res => {
      this.listOfFood = res;
    })
  }
  getOrderDetails() {
    this.orderDetailsService.getAllOrderDetail().subscribe(res => {
      this.listOfOrderDetails = res;
    })
  }
  reOrder() {

  }
  CancelOrder() {
    let order = this.listOfOrder.find(c => c.id == this.data.id);
    let data = {
      id: order.id,
      RestaurantId: order.restaurantId,
      DateTime: order.dateTime,
      Customer: order.customer,
      Location: order.location,
      OrderStatus: order.orderStatuses,
      Total: order.total,
      Driver: order.driver,
      Vehicle: order.vehicle,
      orderLocation: order.orderLocation,
      restaurantStatus: order.restaurantStatuses,
      customerStatus: "false",
      status: order.statuses
    }
    this.orderService.updateOrder(data).subscribe(res => {
      alert(res.toString());
    })
  }
  viewOrder(id) {
    this.isLoading = false;
    this.countItems = 0;
    this.cart = [];
    // let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;
    let orderDetails = this.listOfOrderDetails.filter(c => c.orderId == id);
    orderDetails.forEach(el => {
      let data = {
        CookingTime: this.listOfFood.find(c => c.id == el.foodId).cookingTime,
        DeliveryTime: this.listOfFood.find(c => c.id == el.foodId).deliveryTime,
        Description: this.listOfFood.find(c => c.id == el.foodId).description,
        Name: this.listOfFood.find(c => c.id == el.foodId).name,
        Price: this.listOfFood.find(c => c.id == el.foodId).price,
        amount: el.qty,
        categoryId: this.listOfFood.find(c => c.id == el.foodId).categoryId,
        id: el.foodId,
        picture: this.listOfFood.find(c => c.id == el.foodId).picture,
        restaurantId: this.listOfFood.find(c => c.id == el.foodId).restaurantId,
        type: this.listOfFood.find(c => c.id == el.foodId).type,
        orderDetailsId: el.id,
        orderStatus: true
      }
      this.cart.push(data);
      this.countItems = this.cart.length;
      console.log(this.countItems)
    });
    this.orderService.addOrder(this.cart);
    this.router.navigate(["/menu/order-history"]);
    this.modalControler.dismiss();
  }
  close() {
    this.modalControler.dismiss();
  }
}
