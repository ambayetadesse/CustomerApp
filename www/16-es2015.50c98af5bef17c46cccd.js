(window.webpackJsonp=window.webpackJsonp||[]).push([[16,19,20],{"+cje":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var i=r("HDdC"),o=r("XEKg"),s=r("5Jak"),n=r("/GcI"),a=r("cxbk"),c=r("fXoL"),u=r("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.APIURL=a.a.apiURL}create(t){return this.http.post(this.APIURL+"/restaurant",t)}getAllRestaurant(){return this.http.get(this.APIURL+"/restaurant")}updateRestaurant(t){return this.http.put(this.APIURL+"/restaurant/",t)}removeRestaurant(t){return this.http.delete(this.APIURL+"/restaurant/"+t).toPromise()}handleError(t){return i.a.throw(400===t.status?new o.a(t.json()):404===t.status?new s.a:new n.a(t))}}return t.\u0275fac=function(e){return new(e||t)(c.cc(u.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Dkj+":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var i=r("HDdC"),o=r("cxbk"),s=r("/GcI"),n=r("XEKg"),a=r("5Jak"),c=r("fXoL"),u=r("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.APIURL=o.a.apiURL}create(t){return this.http.post(this.APIURL+"/food",t)}getAllFood(){return this.http.get(this.APIURL+"/food")}updateFood(t){return this.http.put(this.APIURL+"/food/",t)}removeFood(t){return this.http.delete(this.APIURL+"/food/"+t).toPromise()}handleError(t){return i.a.throw(400===t.status?new n.a(t.json()):404===t.status?new a.a:new s.a(t))}}return t.\u0275fac=function(e){return new(e||t)(c.cc(u.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},QiK6:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var i=r("cxbk"),o=r("2Vo4"),s=r("fXoL"),n=r("tk/3"),a=r("o4gM");let c=(()=>{class t{constructor(t,e){this.http=t,this.cart_itemService=e,this.APIURL=i.a.apiURL,this.cart=[],this.cartItemCount=new o.a(0),this.currentDate=(new Date).toISOString()}create(t){return this.http.post(this.APIURL+"/cart",t)}getAllCart(){return this.http.get(this.APIURL+"/cart")}updateCart(t){return this.http.put(this.APIURL+"/cart/",t)}removeCart(t){return this.http.delete(this.APIURL+"/cart/"+t).toPromise()}addToCart(t){this.cart.push(t)}addProduct(t){let e=!1;for(const r of this.cart)if(r.id===t.id){r.amount+=1,e=!0;break}e?this.updateCartItem(t):(t.amount=1,this.cart.push(t),this.cart_itemService.create({foodId:t.id,cartId:this.cartId,price:t.price,discount:0,quantity:t.amount,createdAt:t.cookingTime,updatedAt:this.currentDate,content:""}).subscribe(()=>{})),this.cartItemCount.next(this.cartItemCount.value+1)}decreaseProduct(t){for(const e of this.cart)e.id===t.id&&(e.amount-=1,this.updateCartItem(t),0===e.amount&&this.removeCartItem(t));this.cartItemCount.next(this.cartItemCount.value-1)}removeProduct(t){for(const[e,r]of this.cart.entries())r.id===t.id&&(this.cartItemCount.next(this.cartItemCount.value-r.amount),this.cart.splice(e,1),this.removeCartItem(t))}updateCartItem(t){console.log(t),this.cart_itemService.updateCartItem({id:t.id,foodId:t.foodId,cartId:0,price:t.price,discount:0,quantity:t.amount,createdAt:this.currentDate,updatedAt:this.currentDate,content:""}).subscribe(()=>{})}removeCartItem(t){this.cart_itemService.removeCartItem(t.id).then(()=>{})}}return t.\u0275fac=function(e){return new(e||t)(s.cc(n.a),s.cc(a.a))},t.\u0275prov=s.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},VNSQ:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var i=r("mrSG"),o=r("2Vo4"),s=r("cxbk"),n=r("fXoL"),a=r("tk/3"),c=r("ldse"),u=r("QiK6"),d=r("o4gM");let h=(()=>{class t{constructor(t,e,r,i){this.http=t,this.sharedService=e,this.cartService=r,this.cart_itemService=i,this.APIURL=s.a.apiURL,this.cart=[],this.cartItemCount=new o.a(0),this.RestaurantId=new o.a({}),this.orderStatus=new o.a({}),this.order=[],this.orderItemCount=new o.a(0),this.getAllCart()}create(t){return Object(i.a)(this,void 0,void 0,function*(){return yield this.http.post(this.APIURL+"/order",t)})}getAllOrder(){return this.http.get(this.APIURL+"/order")}updateOrder(t){return this.http.put(this.APIURL+"/order/",t)}removeOrder(t){return this.http.delete(this.APIURL+"/order/"+t).toPromise()}getOrderBy(t){return this.http.get(this.APIURL+"/order"+t)}getOrderByDriverId(t){return this.http.get(this.APIURL+"/order"+t)}getCart(){return this.cart}getOrders(){return this.order}getCartItemCount(){return this.cartItemCount}getOrderItemCount(){return this.orderItemCount}getRestaurantId(){return this.RestaurantId}getOrderStatus(){return this.orderStatus}getAllCart(){this.cartService.getAllCart().subscribe(t=>{t.length>0&&(this.cartId=t[0].id)})}addOrder(t){this.order=[],this.amount=0,this.order.forEach(t=>{const e=this.order.indexOf(e=>e.orderDetailsId===t.orderDetailsId);this.order.splice(e,1)}),this.orderItemCount.next(0),t.forEach(t=>{this.amount=this.amount+t.amount,this.order.push({CookingTime:t.CookingTime,DeliveryTime:t.DeliveryTime,Description:t.Description,Name:t.Name,Price:t.Price,amount:t.amount,categoryId:t.categoryId,id:t.Food,picture:t.picture,restaurantId:t.restaurantId,type:t.type,orderDetailsId:t.orderDetailsId})}),this.orderItemCount.next(this.orderItemCount.value+this.amount)}addProduct(t){console.log(t);let e=!1;for(const r of this.cart)if(r.id===t.id){r.amount+=1,e=!0;break}e?this.updateCartItem(t):(t.amount=1,this.cart.push(t),this.cart_itemService.create({foodId:t.id,cartId:this.cartId,price:t.price,discount:0,quantity:t.amount,createdAt:t.cookingTime,updatedAt:this.currentDate,content:""}).subscribe(t=>{console.log(t.toString())})),this.cartItemCount.next(this.cartItemCount.value+1)}decreaseProduct(t){for(const[e,r]of this.cart.entries())r.id===t.id&&(r.amount-=1,this.updateCartItem(t.id),0===r.amount&&(this.cart.splice(e,1),this.removeCartItem(t)));this.cartItemCount.next(this.cartItemCount.value-1)}removeProduct(t){for(const[e,r]of this.cart.entries())r.id===t.id&&(this.cartItemCount.next(this.cartItemCount.value-r.amount),this.cart.splice(e,1),this.removeCartItem(t))}updateCartItem(t){this.cart_itemService.updateCartItem({foodId:t.id,cartId:this.cartId,price:t.price,discount:0,quantity:t.amount,createdAt:t.cookingTime,updatedAt:this.currentDate,content:""}).subscribe(t=>{console.log(t.toString())})}removeCartItem(t){this.cart_itemService.removeCartItem(t.id).then(t=>{console.log(t.toString())})}}return t.\u0275fac=function(e){return new(e||t)(n.cc(a.a),n.cc(c.a),n.cc(u.a),n.cc(d.a))},t.\u0275prov=n.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ldse:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var i=r("2Vo4"),o=r("fXoL");let s=(()=>{class t{constructor(){this.currentAddress=new i.a({}),this.restaurant=new i.a({}),this.status=new i.a({}),this.location=new i.a({}),this.orderId=new i.a({}),this.RestaurantLocation=new i.a({}),this.resId=new i.a({}),this.listOfCatagoryFilter=new i.a({}),this.deriverId=new i.a({}),this.customerId=new i.a({}),this.driverName=new i.a({})}getCurrentAddress(){return this.currentAddress}getMenuFilter(){return this.listOfCatagoryFilter}getLocation(){return this.location}getStatus(){return this.status}getRestaurantLocation(){return this.RestaurantLocation}getRestaurantId(){return this.resId}getDriverId(){return this.deriverId}getCustomerId(){return this.customerId}getDriverName(){return this.driverName}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},o4gM:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var i=r("cxbk"),o=r("fXoL"),s=r("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.APIURL=i.a.apiURL}create(t){return this.http.post(this.APIURL+"/cartitem",t)}getAllCartItem(){return this.http.get(this.APIURL+"/cartitem")}updateCartItem(t){return this.http.put(this.APIURL+"/cartitem/",t)}removeCartItem(t){return this.http.delete(this.APIURL+"/cartitem/"+t).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(o.cc(s.a))},t.\u0275prov=o.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},v35Q:function(t,e,r){"use strict";r.r(e),r.d(e,"CartPageModule",function(){return g});var i=r("ofXK"),o=r("3Pt+"),s=r("TEn/"),n=r("tyNb"),a=r("mrSG"),c=r("fXoL"),u=r("VNSQ"),d=r("QiK6"),h=r("o4gM"),l=r("Dkj+"),m=r("+cje");function b(t,e){if(1&t){const t=c.Wb();c.Vb(0,"ion-grid",7),c.Vb(1,"ion-row",8),c.Vb(2,"ion-col",9),c.Rb(3,"img",10),c.Ub(),c.Vb(4,"ion-col",11),c.Vb(5,"ion-button",12),c.gc("click",function(){c.wc(t);const r=e.$implicit;return c.ic(2).decreaseCartItem(r)}),c.Rb(6,"ion-icon",13),c.Ub(),c.Ub(),c.Vb(7,"ion-col",14),c.Ec(8),c.Ub(),c.Vb(9,"ion-col",11),c.Vb(10,"ion-button",12),c.gc("click",function(){c.wc(t);const r=e.$implicit;return c.ic(2).increaseCartItem(r)}),c.Rb(11,"ion-icon",15),c.Ub(),c.Ub(),c.Vb(12,"ion-col",16),c.Vb(13,"ion-button",12),c.gc("click",function(){c.wc(t);const r=e.$implicit;return c.ic(2).removeCartItem(r)}),c.Rb(14,"ion-icon",17),c.Ub(),c.Ub(),c.Ub(),c.Vb(15,"ion-row"),c.Vb(16,"ion-col",18),c.Vb(17,"b"),c.Ec(18),c.Ub(),c.Ub(),c.Vb(19,"ion-col",9),c.Vb(20,"b"),c.Ec(21),c.jc(22,"currency"),c.Ub(),c.Ub(),c.Vb(23,"ion-col",5),c.Ec(24),c.jc(25,"currency"),c.Ub(),c.Ub(),c.Ub()}if(2&t){const t=e.$implicit;c.Eb(3),c.oc("src",t.slug,c.xc),c.Eb(5),c.Gc(" ",t.amount," "),c.Eb(10),c.Fc(t.Name),c.Eb(3),c.Fc(c.lc(22,5,t.Price,"ETB")),c.Eb(3),c.Gc(" ",c.lc(25,8,t.amount*t.Price,"ETB")," ")}}function I(t,e){if(1&t){const t=c.Wb();c.Vb(0,"ion-list"),c.Cc(1,b,26,11,"ion-grid",3),c.Vb(2,"ion-grid"),c.Vb(3,"ion-row"),c.Vb(4,"ion-col",4),c.Ec(5," Sub Total: "),c.Ub(),c.Vb(6,"ion-col",5),c.Ec(7),c.jc(8,"currency"),c.Ub(),c.Ub(),c.Vb(9,"ion-row"),c.Vb(10,"ion-col",4),c.Ec(11," Grand Total: "),c.Ub(),c.Vb(12,"ion-col",5),c.Ec(13),c.jc(14,"currency"),c.Ub(),c.Ub(),c.Ub(),c.Vb(15,"ion-button",6),c.gc("click",function(){c.wc(t);const e=c.ic();return e.order(e.listOfCartItem)}),c.Ec(16," Order "),c.Ub(),c.Ub()}if(2&t){const t=c.ic();c.Eb(1),c.oc("ngForOf",t.listOfCartItem),c.Eb(6),c.Gc(" ",c.lc(8,3,t.getTotal(),"ETB")," "),c.Eb(6),c.Gc(" ",c.lc(14,6,t.getGrandTotal(),"ETB")," ")}}function f(t,e){1&t&&(c.Vb(0,"ion-grid"),c.Vb(1,"ion-label"),c.Ec(2," No Active Cart Item Found "),c.Ub(),c.Ub())}const p=[{path:"",component:(()=>{class t{constructor(t,e,r,i,o,s){this.orderService=t,this.cartService=e,this.cartItemService=r,this.foodService=i,this.alertCtrl=o,this.restaurantService=s,this.listOfCartItem=[],this.currentDate=(new Date).toISOString(),this.statusDriver=[{val:"picked",isChecked:!1},{val:"start moving",isChecked:!1},{val:"delivered",isChecked:!1}],this.statusRestaurant=[{val:"order received",isChecked:!0},{val:"start cooking",isChecked:!1},{val:"cooked",isChecked:!1},{val:"ready to service",isChecked:!1}],this.status=[{val:"Accept",isChecked:!1},{val:"Reject",isChecked:!1}]}ngOnInit(){this.cart=this.orderService.getCart(),console.log(this.cart),this.getCart(),this.getCartItem(),this.getFood(),this.getRestaurant()}getCart(){this.cartService.getAllCart().subscribe(t=>{this.listOfCart=t})}getFood(){this.foodService.getAllFood().subscribe(t=>{this.listOfFood=t})}getRestaurant(){this.restaurantService.getAllRestaurant().subscribe(t=>{this.listOfRestaurant=t})}getCartItem(){this.cartItemService.getAllCartItem().subscribe(t=>{null!=this.listOfFood?t.forEach(t=>{let e=this.listOfFood.find(e=>e.id==+t.foodId);if(null!=e){let r={cartId:t.cartId,content:t.content,restaurantId:"3",createdAt:t.createdAt,discount:t.discount,foodName:e.name,foodId:e.id,id:t.id,amount:t.quantity,slug:e.picture,price:t.price,quantity:t.quantity,updatedAt:t.updatedAt};this.listOfCartItem.push(r),this.cartService.addToCart(r)}}):this.refreshFood()})}refreshFood(){setTimeout(()=>{this.getFood(),this.getCartItem()},200)}decreaseCartItem(t){this.cartService.decreaseProduct(t)}increaseCartItem(t){this.cartService.addProduct(t)}removeCartItem(t){this.cartService.removeProduct(t),this.presentAlertConfirm(t)}getTotal(){return this.listOfCartItem.reduce((t,e)=>t+e.amount*e.price,0)}getGrandTotal(){return this.getTotal()}presentAlertConfirm(t){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({header:"Clear cart !",message:"<strong>Are you sure you want to remove all items in your cart ?</strong>",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"OK",handler:()=>{this.cartService.removeProduct(t)}}]});yield e.present()})}order(t){return Object(a.a)(this,void 0,void 0,function*(){this.Total=0,t.forEach(t=>{this.restaurantId=t.restaurantId});const e=this.listOfRestaurant.find(t=>t.id===+this.restaurantId),r={restaurantId:e.accountId.toString(),dateTime:this.currentDate,deliveryTime:this.currentDate,customer:localStorage.getItem("userId"),location:e.location,orderStatuses:this.statusDriver,total:this.getGrandTotal(),driver:"null",vehicle:"null",orderLocation:"null",restaurantStatuses:this.statusRestaurant,customerStatus:"true",statuses:this.status};(yield this.orderService.create(r)).subscribe(()=>Object(a.a)(this,void 0,void 0,function*(){this.getOrder(),(yield this.orderService.getAllOrder()).subscribe(e=>Object(a.a)(this,void 0,void 0,function*(){t.forEach(t=>{this.restaurantId=t.restaurantId,this.Total=this.Total+t.Price*t.amount,this.orderDetailService.create({orderId:e[0].id,foodId:t.id,qty:t.amount,price:t.price}).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){console.log(t.toString()),this.router.navigate(["/menu/order"])}),t=>Object(a.a)(this,void 0,void 0,function*(){yield this.loader.dismiss().then(),console.log(t)}))})}),t=>Object(a.a)(this,void 0,void 0,function*(){yield this.loader.dismiss().theen(),console.log(t)})),this.presentAlert("Add order succesfuly")}))})}getOrder(){return Object(a.a)(this,void 0,void 0,function*(){(yield this.orderService.getAllOrder()).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){this.listOfOrder=yield t}))})}presentAlert(t){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Order",message:t,buttons:["OK"]});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(u.a),c.Qb(d.a),c.Qb(h.a),c.Qb(l.a),c.Qb(s.a),c.Qb(m.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-cart"]],decls:9,vars:2,consts:[["color","primary"],["slot","start"],[4,"ngIf"],["class","ion-text-wrap",4,"ngFor","ngForOf"],["size","9"],["size","3",1,"ion-text-end"],["expand","block",3,"click"],[1,"ion-text-wrap"],[1,"ion-align-items-center"],["size","4"],[3,"src"],["size","2",1,"ion-align-self-center"],["color","medium","fill","clear",3,"click"],["name","remove-circle","slot","icon-only"],["size","1",1,"ion-align-self-center"],["name","add-circle","slot","icon-only"],["size","2"],["name","close-circle","slot","icon-only"],["size","5"]],template:function(t,e){1&t&&(c.Vb(0,"ion-header"),c.Vb(1,"ion-toolbar",0),c.Vb(2,"ion-buttons",1),c.Rb(3,"ion-menu-button"),c.Ub(),c.Vb(4,"ion-title"),c.Ec(5,"Cart"),c.Ub(),c.Ub(),c.Ub(),c.Vb(6,"ion-content"),c.Cc(7,I,17,9,"ion-list",2),c.Cc(8,f,3,0,"ion-grid",2),c.Ub()),2&t&&(c.Eb(7),c.oc("ngIf",0!=e.listOfCartItem.length),c.Eb(1),c.oc("ngIf",0==e.listOfCartItem.length))},directives:[s.r,s.R,s.j,s.A,s.P,s.l,i.n,s.y,i.m,s.q,s.F,s.k,s.i,s.s,s.x],pipes:[i.d],styles:["ion-grid[_ngcontent-%COMP%]{margin:1pc;background-color:hsla(0,0%,62%,.12156862745098039);border-radius:1pc;font-size:23px;font-style:oblique;text-align:center}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({imports:[[n.j.forChild(p)],n.j]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({imports:[[i.c,o.e,s.S,v]]}),t})()}}]);