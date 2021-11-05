import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, IonList, IonSlides, isPlatform, ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Food } from 'src/Table/table';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { CategoryService } from '../Service/category.service';
import { FoodService } from '../Service/food.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data = null;
  opts = {
    freeMode: true,
    slidesPerView: 4.6,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100
  };
  activeCategory = 0;
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;
  categorySlidesVisible = false;
  id: string;
  listOfFood: any[];
  name: any;
  picture: any;
  listOfRestaurant: any[];
  listOfCategory: any[] = [];
  catagories: any[] = [];
  previousValue: null;
  showLocationDetail: boolean;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;
  fieldTextType: boolean;
  visible = false;
  joinRequest: any;
  // join_request: boolean;
  checkIndex: any[] = [];
  isenabled = true;
  dayFinished = [];
  resId: any;
  category: any;
  constructor(private foodService: FoodService,
              private Activatedroute: ActivatedRoute,
              private restaurantservice: RestaurantService,
              private categoryService: CategoryService,
              private router: Router,
              private modalCtrl: ModalController,
              private orderService: OrderService,
              private sharedService: SharedService,
              private alertController: AlertController,
              public toastController: ToastController,
              @Inject(DOCUMENT) private document: Document) { 
                this.restaurantservice.getAllRestaurant().subscribe(res => {
                  this.listOfRestaurant = res;
                  this.name = res.find(c => c.id === this.resId).name;
                  this.picture = res.find(c => c.id === this.resId).photo;
                });
              }
  ngOnInit() {
    this.dayFinished.push(this.Activatedroute.snapshot.paramMap.get('id'));
    this.cart = this.orderService.getCart();
    this.cartItemCount = this.orderService.getCartItemCount();
    this.id = this.Activatedroute.snapshot.paramMap.get('id');
    this.resId = this.sharedService.getRestaurantId().value;
    this.orderService.RestaurantId.next(this.id);
    console.log(this.resId);
    // Set the header position for sticky slides
    const headerHeight = isPlatform('ios') ? 44 : 56;
    this.document.documentElement.style.setProperty('--header-position', `calc(env(safe-area-inset-top) + ${headerHeight}px)`);
    this.getRestaurant();
    this.getFood();
    this.getCategory();
  }
  getFood() {
    this.foodService.getAllFood().subscribe(res => {
      this.getCheckDisable_selecet(res);
      this.listOfFood = res.filter(c => c.restaurantId === (this.resId).toString());
      this.restaurantservice.getAllRestaurant().subscribe(listOfRes => {
      const restaurant = listOfRes.find(c => c.id === this.resId && c.status === "close");
      if (restaurant) {
        this.listOfFood.forEach(ele => {
          for (let i = 0 ; i <= this.listOfFood.length; i++){
            const data = {
              index: i,
              item: ele.id
            };
            this.checkIndex.push(data);
          }
          if (this.dayFinished.includes(ele)) {
            this.dayFinished.splice(this.dayFinished.indexOf(ele), 1);
          }
          else {
            this.dayFinished.push(ele);
          }
        });
      }
      });
    });
  }
  getCheckDisable_selecet(res){
    this.listOfFood = res;
    for(var j = 0 ; j < this.cart.length; j++){
    for (let i = 0; i < this.listOfFood.length; i++) {
      if (this.cart[j].id == res[i].id) {
        this.listOfFood[i].isSelect = true;
        const data = {
          index: i,
          item: this.listOfFood[i].id
        };
        this.checkIndex.push(data);
       // To check select or unselect 
        if (this.checkIndex !== undefined) {
          this.checkIndex.forEach(ele => {
            const found = this.listOfFood.find(c => c.id === ele.item);
            if (ele.item === res.id) {
              this.listOfFood[ele.index].isSelect = true;
            }
            else if (found !== undefined) {
              const index = this.listOfFood.findIndex(c => c.id === ele.item);
              this.listOfFood[index].isSelect = true;
            }
           });
        }
      }
      else {
        this.listOfFood[i].isSelect = false;
      }
    }
  }
  // To check disabled or enable product list
    if(this.cart.length !== 0){
      for(var i = 0 ; i < this.cart.length; i++){
        for(var j = 0; j < res.length; j++){
         if(this.cart[i].id == res[j].id) {
          this.dayFinished.push(res[j]);
         }
        }
      }
    }
  }
  getCategory() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.restaurantservice.getAllRestaurant().subscribe(listOfRestaurant => {
      const restaurant = listOfRestaurant.find(c => c.id === this.resId).categoryId;
      if (restaurant !== undefined){
        for (let i = 0 ; i < restaurant.length; i++){
        const category = res.find(c => c.categoryName === restaurant[i]);
        const data = {
            id: category.id,
            categoryName: restaurant[i]
          };
        this.listOfCategory.push(data);
        console.log(this.listOfCategory);
         }
      }
     });
    });
  }
  getRestaurant() {
    this.restaurantservice.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
      this.name = res.find(c => c.id === this.resId).name;
      this.picture = res.find(c => c.id === this.resId).photo;
    });
  }
  // Get all list viewchildren when ready
  ngAfterViewInit() {
    this.lists.changes.subscribe(_ => {
      this.listElements = this.lists.toArray();
    });
  }

  selectCategory(index, category) {
    this.foodService.getAllFood().subscribe(res => {
      this.listOfFood = res.filter(c => c.categoryId === category && c.restaurantId === (this.resId).toString());
     if (this.listOfFood.length > 0) {
        this.checkIndex.forEach(ele => {
          const item = this.listOfFood.find(c => c.id === ele.item);
          if (item !== undefined) {
            const index = this.listOfFood.findIndex(c => c.id === ele.item);
            this.listOfFood[index].isSelect = true;
          }
        });
      }
      this.listOfFood.forEach(ele => {
        const found = this.checkIndex.find(c => c.item === ele.id);
        if (found !== undefined) {
          if (this.dayFinished.includes(ele)) {
            this.dayFinished.splice(this.dayFinished.indexOf(ele), 1);
          }
          else {
            this.dayFinished.push(ele);
          }
        }
      });
    });
  }
  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.categorySlidesVisible = offset > 1500;
    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        this.activeCategory = i;
        this.slides.slideTo(i);
        break;
      }
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  setDisabled(item) {
    return this.dayFinished.includes(item);
  }
  addToCart(product, index: number) {
    if (this.cart.length === 0) {
      this.getAddToCart(product, index);
    }
    else {
      //To Check the first index of cart order to equal withselect item list
      if(this.cart[0].restaurantId == product.restaurantId){
        if(index == 0){
          this.getAddToCart(product, index);
        }
        else{
        if (this.resId === +product.restaurantId) {
          this.getAddToCart(product, index);
        }
        else {
          this.presentAlert('Switching Restaurant is not allowed');
        }
      }
      }
      else{
        this.presentAlert('Switching Restaurant is not allowed');
      }
    }
  }
  getAddToCart(product, index: number) {
    for (let i = 0; i < this.listOfFood.length; i++) {
      if (index === i) {
        this.listOfFood[i].isSelect = true;
        const data = {
          index: i,
          item: product.id
        };
        this.checkIndex.push(data);
       // console.log(this.checkIndex);
        if (this.checkIndex !== undefined) {
          this.checkIndex.forEach(ele => {
            const found = this.listOfFood.find(c => c.id === ele.item);
            if (ele.item === product.id) {
              this.listOfFood[ele.index].isSelect = true;
            }
            else if (found !== undefined) {
              const index = this.listOfFood.findIndex(c => c.id === ele.item);
              this.listOfFood[index].isSelect = true;
            }
           });
        }
      }
      else {
        this.listOfFood[i].isSelect = false;
      }
    }
    if (this.dayFinished.includes(product)) {
      this.dayFinished.splice(this.dayFinished.indexOf(product), 1);
    }
    else {
      this.dayFinished.push(product);
    }
    this.orderService.addProduct(product);
  }
  async presentAlert(message) {
    const toast = await this.toastController.create({
      // cssClass:"my-custom-class",
      color: 'warning',
      duration: 2000,
      message,
    });
    await toast.present();
  }
  onClick() {
    this.router.navigate(['/menu/cart-modal']);
  }
  backToHome() {
    this.router.navigate(['/menu/home']);
  }
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }

}
