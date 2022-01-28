!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Tftg:function(t,r,o){"use strict";o.r(r),o.d(r,"SignupCustomerPageModule",function(){return x});var i,a,s,u=o("ofXK"),c=o("3Pt+"),l=o("TEn/"),d=o("tyNb"),f=o("mrSG"),b=o("t34c"),g=o("fXoL"),h=o("6wYF"),m=o("Bfh1"),p=o("ldse"),y=function(e,t){return[e,t]},C=function(e,t){return{"fa-eye-slash":e,"fa-eye":t}},v=[{path:"",component:(i=function(){function t(n,r,o,i,a,s){e(this,t),this.fb=n,this.accountService=r,this.alertController=o,this.router=i,this.geolocation=a,this.sharedService=s,this.regform=this.fb.group({}),this.separateDialCode=!1,this.SearchCountryField=b.f,this.CountryISO=b.a,this.PhoneNumberFormat=b.e,this.preferredCountries=[b.a.UnitedStates,b.a.UnitedKingdom],this.latitude=0,this.longitude=0}return n(t,[{key:"ngOnInit",value:function(){var e=this.sharedService.getCurrentAddress().value;console.log(e),this.regform=this.fb.group({FullName:["",c.o.required],email:["",c.o.required],phonenumber:["",c.o.required],locationId:[""],password:["",c.o.required],confirmPassword:["",c.o.required],type:[""],active:[""]}),this.getCurrentCoordinates()}},{key:"getCurrentCoordinates",value:function(){var e=this;this.geolocation.getCurrentPosition().then(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,e.Address={lat:e.latitude,lon:e.longitude},e.sharedService.currentAddress.next(e.Address),console.log(t.coords)}).catch(function(e){console.log("Error getting location",e)})}},{key:"registerAccount",value:function(){this.regform.get("password").value===this.regform.get("confirmPassword").value?this.regform.valid?(this.regform.get("locationId").setValue(this.Address),this.regform.get("active").setValue("true"),this.regform.get("type").setValue("customer"),this.regform.get("phonenumber").setValue(this.regform.get("phonenumber").value.internationalNumber),this.accountService.create(this.regform.value).subscribe(function(e){}),this.router.navigate(["/menu/login"])):this.ErrorAlert("Please Enter All field."):this.ErrorAlert("Password donot match")}},{key:"login",value:function(){this.router.navigate(["/menu/login"])}},{key:"presentAlertConfirm",value:function(e){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Confirm!",message:"<strong>Are you sure you want delete?</strong>",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Confirm Cancel: blah")}},{text:"OK",handler:function(){r.accountService.removeAccount(e.id),r.regform.reset(),r.accountId=null}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"ErrorAlert",value:function(e){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Error",message:e,buttons:["OK"]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"toggleFieldTextType",value:function(){this.fieldTextType=!this.fieldTextType}},{key:"conPassword",value:function(){this.conformPassword=!this.conformPassword}}]),t}(),i.\u0275fac=function(e){return new(e||i)(g.Qb(c.b),g.Qb(h.a),g.Qb(l.a),g.Qb(d.g),g.Qb(m.a),g.Qb(p.a))},i.\u0275cmp=g.Kb({type:i,selectors:[["app-signup-customer"]],decls:43,vars:27,consts:[["color","primary"],["slot","start"],["defaultHref","login"],["color","primary",2,"padding-left","20px","padding-top","20px","background-color","#3880ff"],[3,"formGroup"],["formControlName","FullName","type","text"],["formControlName","email","type","text"],[2,"margin-left","11px","padding-top","11px"],["name","phone","formControlName","phonenumber",2,"margin-left","24px","padding-top","11px",3,"cssClass","preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode","numberFormat","ngModel","ngModelChange"],["formControlName","password",3,"type","required"],[1,"fa",3,"ngClass","click"],["formControlName","confirmPassword",3,"type","required"],[2,"text-align","center","margin","auto"],["expand","full",3,"click"],["slot","start","name","add-circle-outline"],[2,"text-align","center"],[2,"margin-left","-37px","color","#234ada","background-color","#f8f9fa",3,"click"]],template:function(e,t){1&e&&(g.Vb(0,"ion-header"),g.Vb(1,"ion-toolbar",0),g.Vb(2,"ion-buttons",1),g.Rb(3,"ion-back-button",2),g.Ub(),g.Vb(4,"ion-title"),g.Ec(5,"Sign in "),g.Ub(),g.Ub(),g.Vb(6,"p",3),g.Ec(7,"Create an account with new email address"),g.Ub(),g.Ub(),g.Vb(8,"ion-content"),g.Vb(9,"form",4),g.Vb(10,"ion-item"),g.Vb(11,"ion-label"),g.Ec(12,"Full Name"),g.Ub(),g.Rb(13,"ion-input",5),g.Ub(),g.Vb(14,"ion-item"),g.Vb(15,"ion-label"),g.Ec(16,"Email "),g.Ub(),g.Rb(17,"ion-input",6),g.Ub(),g.Vb(18,"ion-item-group"),g.Vb(19,"ion-row"),g.Vb(20,"ion-label",7),g.Ec(21,"Phone number"),g.Ub(),g.Ub(),g.Vb(22,"ion-row"),g.Vb(23,"ngx-intl-tel-input",8),g.gc("ngModelChange",function(e){return t.phoneNumber=e}),g.Ub(),g.Ub(),g.Ub(),g.Vb(24,"ion-item"),g.Vb(25,"ion-label"),g.Ec(26,"Password"),g.Ub(),g.Rb(27,"ion-input",9),g.Vb(28,"i",10),g.gc("click",function(){return t.toggleFieldTextType()}),g.Ub(),g.Ub(),g.Vb(29,"ion-item"),g.Vb(30,"ion-label"),g.Ec(31,"Confirm Password"),g.Ub(),g.Rb(32,"ion-input",11),g.Vb(33,"i",10),g.gc("click",function(){return t.conPassword()}),g.Ub(),g.Ub(),g.Vb(34,"div",12),g.Vb(35,"ion-button",13),g.gc("click",function(){return t.registerAccount()}),g.Rb(36,"ion-icon",14),g.Ec(37," Sign Up "),g.Ub(),g.Ub(),g.Vb(38,"ion-item"),g.Vb(39,"ion-label",15),g.Ec(40,"Already have an account ?"),g.Ub(),g.Vb(41,"button",16),g.gc("click",function(){return t.login()}),g.Ec(42," Login "),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e&&(g.Eb(9),g.oc("formGroup",t.regform),g.Eb(14),g.oc("cssClass","custom")("preferredCountries",t.preferredCountries)("enableAutoCountrySelect",!0)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",g.sc(18,y,t.SearchCountryField.Iso2,t.SearchCountryField.Name))("selectFirstCountry",!0)("selectedCountryISO",t.CountryISO.Ethiopia)("maxLength",15)("phoneValidation",!0)("separateDialCode",!0)("numberFormat",t.PhoneNumberFormat.National)("ngModel",t.phoneNumber),g.Eb(4),g.oc("type",t.fieldTextType?"text":"password"),g.Eb(1),g.oc("ngClass",g.sc(21,C,!t.fieldTextType,t.fieldTextType)),g.Eb(4),g.oc("type",t.conformPassword?"text":"password"),g.Eb(1),g.oc("ngClass",g.sc(24,C,!t.conformPassword,t.conformPassword)))},directives:[l.r,l.R,l.j,l.f,l.g,l.P,l.l,c.p,c.j,c.d,l.v,l.x,l.u,l.ab,c.i,c.c,b.b,l.w,l.F,b.c,c.n,u.l,l.i,l.s],styles:["ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;--border-radius:14px}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:14px;--background:#f3f3f3;margin-top:-13px}ion-content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{margin:5px 0}ion-header[_ngcontent-%COMP%]{background-color:#3880ff;border-radius:14px}"]}),i)}],w=((s=function t(){e(this,t)}).\u0275fac=function(e){return new(e||s)},s.\u0275mod=g.Ob({type:s}),s.\u0275inj=g.Nb({imports:[[d.j.forChild(v)],d.j]}),s),x=((a=function t(){e(this,t)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=g.Ob({type:a}),a.\u0275inj=g.Nb({imports:[[u.c,c.e,l.S,w,c.m,b.d]]}),a)},ldse:function(t,r,o){"use strict";o.d(r,"a",function(){return s});var i=o("2Vo4"),a=o("fXoL"),s=function(){var t=function(){function t(){e(this,t),this.currentAddress=new i.a({}),this.restaurant=new i.a({}),this.status=new i.a({}),this.location=new i.a({}),this.orderId=new i.a({}),this.RestaurantLocation=new i.a({}),this.resId=new i.a({}),this.listOfCatagoryFilter=new i.a({}),this.deriverId=new i.a({}),this.customerId=new i.a({}),this.driverName=new i.a({})}return n(t,[{key:"getCurrentAddress",value:function(){return this.currentAddress}},{key:"getMenuFilter",value:function(){return this.listOfCatagoryFilter}},{key:"getLocation",value:function(){return this.location}},{key:"getStatus",value:function(){return this.status}},{key:"getRestaurantLocation",value:function(){return this.RestaurantLocation}},{key:"getRestaurantId",value:function(){return this.resId}},{key:"getDriverId",value:function(){return this.deriverId}},{key:"getCustomerId",value:function(){return this.customerId}},{key:"getDriverName",value:function(){return this.driverName}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();