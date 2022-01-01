import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Food, Restaurant } from 'src/Table/table';
import { CategoryService } from '../Service/category.service';
import { FoodService } from '../Service/food.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';
import { SharedService } from '../Service/shared.service';
import { BehaviorSubject } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  regform = this.fb.group({});
  listOfRestaurant: any[] = [];
  listOfFood: Food[];
  categories = [];
  highlights = [];
  featured = [];
  term: string;
  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true
  };
  showLocationDetail = false;
  filteredItemsSearch: any;
  cartItemCount: BehaviorSubject<number>;
  cart = [];
  @ViewChild('pageTop') pageTop: IonContent;
  listOfCatagoryFilter: BehaviorSubject<any>;
  count: number = 0;
  listOfCatagory: any[] = [];
  categoryIds: any[];
  listOfRestaurants: Restaurant[];
  menu: boolean = false;
  category: any[] = [];
  categoriesList: Category[];
  hours: number;
  am_pm: string;
  minutes: string | number;
  statusOfRestaurant: string;
  showScroll: boolean = false;
  public pageScroller() {
    this.pageTop.scrollToTop();
  }
  currentDate = new Date().toISOString();
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private foodService: FoodService,
    private catagoryService: CategoryService,
    private router: Router,
    private sharedService: SharedService,
    private orderService: OrderService) {
    var date = new Date(this.currentDate);
    this.hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    this.am_pm = date.getHours() >= 12 ? "pm" : "am";
    this.minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let time = this.hours + ":" + this.minutes + " " + this.am_pm;
    console.log(this.currentDate);
  }
  ngOnInit() {
    this.regform = this.fb.group({
      menu: [""]
    })
    this.cartItemCount = this.orderService.getCartItemCount();
    this.cart = this.orderService.getCart();
    this.getAllRestaurant();
    this.getRestaurant();
    this.getFood();
  }
  async getCatagory() {
    this.catagoryService.getAllCategory().subscribe(async res => {
      this.categoriesList = await res;
      res.forEach(element => {
        this.listOfRestaurants.forEach(ele => {
          if (ele.categoryId)
            for (let i = 0; i < ele.categoryId.length; i++) {
              if (ele.categoryId[i] == element.categoryName) {
                this.count = this.count + 1;
              }
            }
        })
        let data = {
          id: element.id,
          categoryName: element.categoryName,
          count: this.count
        }
        this.listOfCatagory.push(data);
        this.count = 0;
      });
    })
  }
  async selectMenu(event) {
    this.listOfRestaurant = [];
    this.categoryIds = event.detail.value;
    if (this.categoryIds.length > 0) {
      this.listOfRestaurants.forEach(ele => {
        if (ele.categoryId.length > 0) {
          this.count = 0;
          for (let i = 0; i < ele.categoryId.length; i++) {
            if (this.categoryIds.length > 0) {
              for (let j = 0; j < this.categoryIds.length; j++) {
                let category = this.listOfCatagory.find(c => c.id == +this.categoryIds[j]);
                if (ele.categoryId[i] == category.categoryName) {
                  this.count = this.count + 1;
                }
              }
            }
          }
          if (this.count == 1) {
            this.catagoryService.getAllCategory().subscribe(async result => {
              this.categoriesList = await result;
              this.category = [];
              for (let i = 0; i < ele.categoryId.length; i++) {
                const data = {
                  categoryName: ele.categoryId[i],
                };
                this.category.push(data);
              }
              this.getStatusRestaurant(ele);
              let data = {
                id: ele.id,
                Name: ele.name,
                Location: ele.location,
                Type: ele.type,
                StartWorkingHour: ele.startWorkingHour,
                EndWorkingHour: ele.endWorkingHour,
                AreaSpace: ele.areaSpace,
                PhoneNumber: ele.phoneNumber,
                GM: ele.gm,
                ContactPerson: ele.contactPerson,
                Email: ele.email,
                Photo: ele.photo,
                accountId: ele.accountId,
                status: this.statusOfRestaurant,
                Category: this.category
              }
              this.listOfRestaurant.push(data);
            });
          }
        }
      })
    }
    else {
      this.restaurantService.getAllRestaurant().subscribe(async res => {
        await res.forEach(ele => {
          this.catagoryService.getAllCategory().subscribe(async result => {
            this.categoriesList = await result;
            this.category = [];
            for (let i = 0; i < ele.categoryId.length; i++) {
              const data = {
                categoryName: ele.categoryId[i],
              };
              this.category.push(data);
            }
            this.getStatusRestaurant(ele)
            let data = {
              id: ele.id,
              Name: ele.name,
              Location: ele.location,
              Type: ele.type,
              StartWorkingHour: ele.startWorkingHour,
              EndWorkingHour: ele.endWorkingHour,
              AreaSpace: ele.areaSpace,
              PhoneNumber: ele.phoneNumber,
              GM: ele.gm,
              ContactPerson: ele.contactPerson,
              Email: ele.email,
              Photo: ele.photo,
              accountId: ele.accountId,
              status: this.statusOfRestaurant,
              Category: this.category
            }
            this.listOfRestaurant.push(data);
          });
        });
      });
    }
  }
  async getStatusRestaurant(ele) {
    //starting time work in restaurant
    var start_date = new Date(ele.startWorkingHour);
    var start_hours = start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours();
    var start_am_pm = start_date.getHours() >= 12 ? "pm" : "am";
    var start_minutes = start_date.getMinutes() < 10 ? "0" + start_date.getMinutes() : start_date.getMinutes();
    //finishing time working restaurant 
    var end_date = new Date(ele.endWorkingHour);
    var end_hours = end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours();
    var end_am_pm = end_date.getHours() >= 12 ? "pm" : "am";
    var end_minutes = end_date.getMinutes() < 10 ? "0" + end_date.getMinutes() : end_date.getMinutes();
    if (start_hours <= this.hours) {
      if (this.am_pm == start_am_pm) {
        this.statusOfRestaurant = "open";
      }
      else if (this.am_pm == end_am_pm) {
        if (this.hours <= end_hours) {
          this.statusOfRestaurant = "open";
        }
      }
    }
    else {
      this.statusOfRestaurant = "close";
    }
    if (ele.status == "open") {
      this.statusOfRestaurant = "open";
    }
    else {
      this.statusOfRestaurant = "close";
    }
  }
  async getAllRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(async res => {
      this.listOfRestaurants = await res;
    });
  }
  async getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(async res => {
      await res.forEach(ele => {
        this.catagoryService.getAllCategory().subscribe(async result => {
          this.categoriesList = await result;
          this.category = [];
          for (let i = 0; i < ele.categoryId.length; i++) {
            const data = {
              categoryName: ele.categoryId[i],
            };
            this.category.push(data);
          }
          this.getStatusRestaurant(ele);
          let data = {
            id: ele.id,
            Name: ele.name,
            Location: ele.location,
            Type: ele.type,
            StartWorkingHour: ele.startWorkingHour,
            EndWorkingHour: ele.endWorkingHour,
            AreaSpace: ele.areaSpace,
            PhoneNumber: ele.phoneNumber,
            GM: ele.gm,
            ContactPerson: ele.contactPerson,
            Email: ele.email,
            Photo: ele.photo,
            accountId: ele.accountId,
            status: this.statusOfRestaurant,
            Category: this.category
          }
          this.listOfRestaurant.push(data);
          //catagory add in menu list
          if (res.length == this.listOfRestaurant.length) {
            this.categoriesList.forEach(element => {
              this.listOfRestaurants.forEach(ele => {
                if (ele.categoryId)
                  for (let i = 0; i < ele.categoryId.length; i++) {
                    if (ele.categoryId[i] == element.categoryName) {
                      this.count = this.count + 1;
                    }
                  }
              })
              let data = {
                id: element.id,
                categoryName: element.categoryName,
                count: this.count
              }
              this.listOfCatagory.push(data);
              this.count = 0;
            });
          }
          // end of catagory
        });
      });
    });
  }
  async getFood() {
    this.foodService.getAllFood().subscribe(async res => {
      this.listOfFood = await res;
    })
  }
  // Dummy refresher function
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  openLink(id, resId) {
    this.sharedService.resId.next(resId);
    this.router.navigate(["/menu/details/" + id]);
  }
  // show or hide a location string later
  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 40;
    this.showScroll = offset > 300
  }
  filter(query) {
    this.filteredItemsSearch = (query.target.value) ?
      this.listOfRestaurant.filter(p => p.Name.toLowerCase().includes(query.target.value.toLowerCase())) :
      this.listOfRestaurant;
  }
  filterByMenu() {
    this.menu = true;
  }
  selectOpenClose(ev) {
    this.listOfRestaurant = [];
    this.restaurantService.getAllRestaurant().subscribe(async res => {
      await res.forEach(ele => {
        this.catagoryService.getAllCategory().subscribe(async result => {
          this.categoriesList = await result;
          this.category = [];
          for (let i = 0; i < ele.categoryId.length; i++) {
            const data = {
              categoryName: ele.categoryId[i],
            };
            this.category.push(data);
          }
          this.getStatusRestaurant(ele);
          let data = {
            id: ele.id,
            Name: ele.name,
            Location: ele.location,
            Type: ele.type,
            StartWorkingHour: ele.startWorkingHour,
            EndWorkingHour: ele.endWorkingHour,
            AreaSpace: ele.areaSpace,
            PhoneNumber: ele.phoneNumber,
            GM: ele.gm,
            ContactPerson: ele.contactPerson,
            Email: ele.email,
            Photo: ele.photo,
            accountId: ele.accountId,
            status: this.statusOfRestaurant,
            Category: this.category
          }
          this.listOfRestaurant.push(data);
          this.listOfRestaurant = this.listOfRestaurant.filter(c => c.status == ev.detail.value);
        });
      });
    });
  }
}
