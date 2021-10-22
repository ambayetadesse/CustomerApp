import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, Food, Order, OrderDetail, Restaurant } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import LocationPicker from "location-picker";
import { SharedService } from '../Service/shared.service';
import { AlertController, ModalController } from '@ionic/angular';
import { RestaurantService } from '../Service/restaurant.service';
import { CustomerOptionPage } from '../customer-option/customer-option.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  id: string;
  listOfFood: any;
  picture: any;
  name: any;
  listOfOrder: any[] = [];
  listOfAccount: Account[];
  listOfOrderDetails: OrderDetail[];
  cart: any[] = [];
  lp: LocationPicker;
  UserId: string;
  messageOrder: string;
  massge: boolean;
  countItems: number;
  statusOrder: { id: number; val: string; }[];
  opts = {
    freeMode: true,
    slidesPerView: 4.6,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100
  }
  activeCategory = 0;
  public segment: string = "All";
  listOfRestaurant: Restaurant[];
  listOfOrderProcessing: any[] = [];
  listOfOrderCompeleted: any[] = [];
  listOfOrderCancelled: any[] = [];
  isLoading = false;
  orderStatus: any;
  driverPhone: any;
  driverName: any;
  a: number;
  orderStatuses: string;
  constructor(private foodService: FoodService,
    private orderService: OrderService,
    private accountService: AccountService,
    private orderDetailsService: OrderDetailService,
    private router: Router,
    private sharedService: SharedService,
    private alertCtrl: AlertController,
    private restaurantService: RestaurantService,
    private modalController: ModalController,
    private callNumber: CallNumber
    // private _Activatedroute:ActivatedRoute,
  ) {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    })
  }

  ngOnInit() {
    // this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getRestaurant();
    this.getFood();
    this.getOrder();
    this.getOrderDetails();
    this.getProcessingOrder();
    this.getCompeletedOrder();
    this.getCancelledOrder();
    //this.lp = new LocationPicker('map');
  }
  getRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    })
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

  getOrder() {
    this.listOfOrder = [];
    this.orderService.getAllOrder().subscribe(res => {
      this.UserId = localStorage.getItem('userId');
      const result = res.filter(c => c.customer === this.UserId);
      if (result.length > 0 && this.listOfRestaurant != undefined) {
        result.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
           this.getStatusOfOrder(element);
            const resName = this.listOfRestaurant.find(c => c.id === +element.restaurantId);
            const data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: result.find(c => c.id === +element.customer).fullName,
              Location: element.location,
              OrderStatus: this.orderStatuses,
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderNo: element.orderNo,
              orderLocation: element.orderLocation,
              restaurantName: resName.name
            };
            this.listOfOrder.push(data);
            this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
            // this.viewOrder(element.id)
          });
        });
      }
      else {
        this.refresh();
        this.massge = true;
        this.messageOrder = 'Preparing your order ...';
      }
    });
  }
  getProcessingOrder() {
   this.orderService.getAllOrder().subscribe(res => {
    this.listOfOrderProcessing = [];
      this.UserId = localStorage.getItem("userId");
      let order = res.filter(c => c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered") && c.customer == this.UserId)
      if (order.length > 0 && this.listOfRestaurant != undefined) {
        order.forEach(element => {
          if(element.driver !== ""){
            this.accountService.getAllAccount().subscribe(result => {
              let customerName = result.find(c => c.id == element.customer);
              let driver = result.find(c => c.id == element.driver);
              this.getStatusOfOrder(element);
              if(driver){
                this.driverPhone = driver.phonenumber;
                this.driverName = driver.fullName
              }
              else{
                this.driverPhone = "";
                this.driverName = ""
              }
              let data = {
                id: element.id,
                DateTime: element.dateTime,
                Customer: customerName.fullName,
                Location: element.location,
                OrderStatus: this.orderStatuses,
                driverPhonenumber:this.driverPhone,
                Total: element.total,
                Driver: this.driverName,
                DriverId: element.driver,
                CustomerId: element.customer,
                Vehicle: element.vehicle,
                orderLocation: element.orderLocation,
                restaurantName: this.listOfRestaurant.find(c => c.accountId == element.restaurantId).name
              }
              this.listOfOrderProcessing.push(data);
              this.listOfOrderProcessing.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
            })
          }
        });
      }
      else {
        this.refreshProcessingTask();
        this.massge = true;
        this.messageOrder = "Preparing your order ..."
      }
    })
  }
  getCompeletedOrder() {
    this.orderService.getAllOrder().subscribe(res => {
      this.listOfOrderCompeleted = [];
      this.UserId = localStorage.getItem("userId");
      let order = res.filter(c => c.orderStatuses.find(c => c.isChecked == true && c.val == "delivered") && c.customer == this.UserId)
      if (order.length > 0 && this.listOfRestaurant != undefined) {
        order.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
            let data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: result.find(c => c.id == element.customer).fullName,
              Location: element.location,
              OrderStatus: "Completed",
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderLocation: element.orderLocation,
              restaurantName: this.listOfRestaurant.find(c => c.accountId == element.restaurantId).name
            }
            this.listOfOrderCompeleted.push(data);
            this.listOfOrderCompeleted.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
            console.log(this.listOfOrderCompeleted);
          })
        });
      }
      else {
        this.refreshCompleteTask();
        this.massge = true;
        this.messageOrder = "Preparing your order ..."
      }
    })
  }
  getCancelledOrder() {
    this.orderService.getAllOrder().subscribe(res => {
      this.listOfOrderCancelled = [];
      this.UserId = localStorage.getItem("userId");
      let order = res.filter(c => c.customerStatus == "false" && c.customer == this.UserId)
      if (order.length > 0 && this.listOfRestaurant != undefined) {
        order.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
            let data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: result.find(c => c.id == element.customer).fullName,
              Location: element.location,
              OrderStatus: "Cancelled",
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderLocation: element.orderLocation,
              restaurantName: this.listOfRestaurant.find(c => c.accountId == element.restaurantId).name
            }
            this.listOfOrderCancelled.push(data);
            this.listOfOrderCancelled.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
            console.log(this.listOfOrderCancelled);
          })
        });
      }
      else {
        this.refreshCancelTask();
        this.massge = true;
        this.messageOrder = "Preparing your order ..."
      }
    })
  }
  getStatusOfOrder(element){
    this.a = 0;
    for(let i=0;i<element.orderStatuses.length;i++){
    if(element.orderStatuses[i].isChecked == false){
      this.a = this.a+1;
    }
    else{
      this.orderStatuses = element.orderStatuses[i].val;
    }
    }
    if(this.a ==3){
      for(let i=0;i<element.restaurantStatuses.length;i++){
        if(element.restaurantStatuses[i].isChecked == true){
          this.orderStatuses = element.restaurantStatuses[i].val;
        }
        }
    }
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
  }
  location(location) {
    this.isLoading = false;
    this.sharedService.status.next("order");
    this.sharedService.RestaurantLocation.next(location);
    this.router.navigate(["/menu/location"]);
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  allOrder(item, id) {
    this.isLoading = true;
    this.modalController.create({
      component: CustomerOptionPage,
      cssClass: 'customerOptions',
      componentProps: {
        data: item,
        id: id
      }
    }).then((modelElement) => {
      modelElement.present();
    })
  }
  sendMessage(driverId, customerId, driverName) {
    this.sharedService.driverName.next(driverName);
    this.sharedService.deriverId.next(driverId);
    this.sharedService.customerId.next(customerId);
    this.router.navigate(["/message"]);
  }
  callToDriver(phonenumber) {
    this.callNumber.callNumber(phonenumber, true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  refresh(){
    setTimeout(() => {
      this.getOrder();
    });
  }
  refreshProcessingTask(){
    setTimeout(()=>{
      this.getProcessingOrder();
    },200);
  }
  refreshCompleteTask(){
    setTimeout(()=>{
      this.getCompeletedOrder();
    },200);
  }
  refreshCancelTask(){
    setTimeout(()=>{
      this.getCancelledOrder();
    },200);
  }
  doRefresh(event) {
    setTimeout(() => {
      this.getOrder();
     // this.getOrderDetails();
      this.getProcessingOrder();
      this.getCompeletedOrder();
      this.getCancelledOrder();
      event.target.complete();
    }, 2000);
  }
}

