!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3tpA":function(t,i,s){"use strict";s.r(i),s.d(i,"MessagePageModule",function(){return U});var r,o,a,u,c=s("ofXK"),d=s("3Pt+"),l=s("TEn/"),h=s("tyNb"),f=s("mrSG"),g=s("fXoL"),m=s("ldse"),b=s("cxbk"),v=s("tk/3"),p=((u=function(){function t(n){e(this,t),this.http=n,this.APIURL=b.a.apiURL}return n(t,[{key:"create",value:function(e){return this.http.post(this.APIURL+"/message",e)}},{key:"getAllMessage",value:function(){return this.http.get(this.APIURL+"/message")}},{key:"updateMessage",value:function(e){return this.http.put(this.APIURL+"/message/",e)}},{key:"removeMessage",value:function(e){return this.http.delete(this.APIURL+"/message/"+e).toPromise()}}]),t}()).\u0275fac=function(e){return new(e||u)(g.cc(v.a))},u.\u0275prov=g.Mb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),w=((a=function(){function t(){e(this,t)}return n(t,[{key:"nativeWindow",get:function(){return window}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=g.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a.ngInjectableDef=Object(g.Mb)({factory:function(){return new a},token:a,providedIn:"root"}),a),y=((o=function(){function t(n,i,s){e(this,t),this.element=n,this._window=i,this._zone=s,this.onlyGrow=!1,this.useImportant=!1,this.resized=new g.o,this.retries=0,this._destroyed=!1,"TEXTAREA"!==this.element.nativeElement.tagName?this._findNestedTextArea():(this.textAreaEl=this.element.nativeElement,this.textAreaEl.style.overflow="hidden",this._onTextAreaFound())}return n(t,[{key:"minRows",set:function(e){this._minRows=e,this.textAreaEl&&(this.textAreaEl.rows=e)}},{key:"onInput",value:function(e){this.adjust()}},{key:"ngOnDestroy",value:function(){this._destroyed=!0,this._windowResizeHandler&&this._window.nativeWindow.removeEventListener("resize",this._windowResizeHandler,!1)}},{key:"ngAfterContentChecked",value:function(){this.adjust()}},{key:"ngOnChanges",value:function(e){this.adjust(!0)}},{key:"_findNestedTextArea",value:function(){var e=this;this.textAreaEl=this.element.nativeElement.querySelector("TEXTAREA"),!this.textAreaEl&&this.element.nativeElement.shadowRoot&&(this.textAreaEl=this.element.nativeElement.shadowRoot.querySelector("TEXTAREA")),this.textAreaEl?(this.textAreaEl.style.overflow="hidden",this._onTextAreaFound()):this.retries>=3?console.warn("ngx-autosize: textarea not found"):(this.retries++,setTimeout(function(){e._findNestedTextArea()},100))}},{key:"_onTextAreaFound",value:function(){var e=this;this._addWindowResizeHandler(),setTimeout(function(){e.adjust()})}},{key:"_addWindowResizeHandler",value:function(){var e=this;this._windowResizeHandler=function(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var s=this,r=arguments,o=function(){n=null,i||e.apply(s,r)},a=i&&!n;clearTimeout(n),n=setTimeout(o,t),a&&e.apply(s,r)}}(function(){e._zone.run(function(){e.adjust()})},200),this._zone.runOutsideAngular(function(){e._window.nativeWindow.addEventListener("resize",e._windowResizeHandler,!1)})}},{key:"adjust",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this._destroyed&&this.textAreaEl&&this.textAreaEl.parentNode){var t=this.textAreaEl.value;if(!1===e&&t===this._oldContent&&this.textAreaEl.offsetWidth===this._oldWidth)return;this._oldContent=t,this._oldWidth=this.textAreaEl.offsetWidth;var n=this.textAreaEl.cloneNode(!0),i=this.textAreaEl.parentNode;n.style.width=this.textAreaEl.offsetWidth+"px",n.style.visibility="hidden",n.style.position="absolute",n.textContent=t,i.appendChild(n),n.style.overflow="hidden",n.style.height="auto";var s=n.scrollHeight,r=this._window.nativeWindow.getComputedStyle(n,null);s+=parseInt(r.getPropertyValue("border-top-width")),s+=parseInt(r.getPropertyValue("border-bottom-width")),s+=parseInt(r.getPropertyValue("padding-top")),s+=parseInt(r.getPropertyValue("padding-bottom"));var o=this.textAreaEl.offsetHeight,a=s>o;if(!1===this.onlyGrow||a){var u=this._getLineHeight(),c=s/u;if(this._minRows&&this._minRows>=c)s=this._minRows*u;else if(this.maxRows&&this.maxRows<=c){var d=this.maxRows*u;s=this.onlyGrow?Math.max(d,o):d,this.textAreaEl.style.overflow="auto"}else this.textAreaEl.style.overflow="hidden";this.textAreaEl.style.setProperty("height",s+"px",this.useImportant?"important":""),this.resized.emit(s)}i.removeChild(n)}}},{key:"_getLineHeight",value:function(){var e=parseInt(this.textAreaEl.style.lineHeight,10);if(isNaN(e)&&this._window.nativeWindow.getComputedStyle){var t=this._window.nativeWindow.getComputedStyle(this.textAreaEl);e=parseInt(t.lineHeight,10)}if(isNaN(e)){var n=this._window.nativeWindow.getComputedStyle(this.textAreaEl,null).getPropertyValue("font-size");e=Math.floor(1.5*parseInt(n.replace("px",""),10))}return e}}]),t}()).\u0275fac=function(e){return new(e||o)(g.Qb(g.m),g.Qb(w),g.Qb(g.C))},o.\u0275dir=g.Lb({type:o,selectors:[["","autosize",""]],hostBindings:function(e,t){1&e&&g.gc("input",function(e){return t.onInput(e.target)})},inputs:{onlyGrow:"onlyGrow",useImportant:"useImportant",minRows:"minRows",maxRows:"maxRows"},outputs:{resized:"resized"},features:[g.Cb]}),o),I=((r=function t(){e(this,t)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=g.Ob({type:r}),r.\u0275inj=g.Nb({providers:[w],imports:[[]]}),r);function E(e,t){if(1&e&&(g.Vb(0,"ion-col",12),g.Vb(1,"b"),g.Ec(2),g.Ub(),g.Vb(3,"span"),g.Ec(4),g.Ub(),g.Vb(5,"div",13),g.Rb(6,"br"),g.Ec(7),g.jc(8,"date"),g.Ub(),g.Ub()),2&e){var n=g.ic().$implicit;g.Eb(2),g.Fc(n.user),g.Eb(2),g.Fc(n.msgcontent),g.Eb(3),g.Gc(" ",g.lc(8,3,n.date,"short")," ")}}function x(e,t){if(1&e&&(g.Vb(0,"ion-col",14),g.Vb(1,"b"),g.Ec(2),g.Ub(),g.Vb(3,"span"),g.Ec(4),g.Ub(),g.Vb(5,"div",13),g.Rb(6,"br"),g.Ec(7),g.jc(8,"date"),g.Ub(),g.Ub()),2&e){var n=g.ic().$implicit;g.Eb(2),g.Fc(n.user),g.Eb(2),g.Fc(n.msgcontent),g.Eb(3),g.Gc(" ",g.lc(8,3,n.date,"short")," ")}}function A(e,t){if(1&e&&(g.Vb(0,"ion-row"),g.Cc(1,E,9,6,"ion-col",10),g.Cc(2,x,9,6,"ion-col",11),g.Ub()),2&e){var n=t.$implicit,i=g.ic();g.Eb(1),g.oc("ngIf",i.currentUser!==n.sessionId),g.Eb(1),g.oc("ngIf",i.currentUser===n.sessionId)}}var k,_,R,M=[{path:"",component:(k=function(){function t(n,i){e(this,t),this.sharedService=n,this.messageService=i}return n(t,[{key:"ngOnInit",value:function(){this.customerName=this.sharedService.getDriverName().value,this.driverId=this.sharedService.getDriverId().value,this.customerId=this.sharedService.getCustomerId().value,this.currentUser=this.customerId,this.getMessage()}},{key:"getMessage",value:function(){var e=this;this.messageService.getAllMessage().subscribe(function(t){return Object(f.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filter(function(e){return e.userId==localStorage.getItem("userId")&&e.driverId==i.driverId});case 2:n=e.sent,this.listOfMessage=n.sort(function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}),this.currentUser=localStorage.getItem("userId");case 4:case"end":return e.stop()}},e,this)}))})}},{key:"sendMessage",value:function(){var e=this,t={msgcontent:this.newMsg,date:new Date,userId:this.customerId,driverId:this.driverId,sessionId:localStorage.getItem("userId")};this.listOfMessage.push(t),this.listOfMessage.sort(function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}),this.messageService.create(t).subscribe(function(t){console.log(t.toString()),e.getMessage()}),this.newMsg="",setTimeout(function(){e.content.scrollToBottom(200)})}}]),t}(),k.\u0275fac=function(e){return new(e||k)(g.Qb(m.a),g.Qb(p))},k.\u0275cmp=g.Kb({type:k,selectors:[["app-message"]],viewQuery:function(e,t){var n;1&e&&g.Ic(l.l,1),2&e&&g.uc(n=g.hc())&&(t.content=n.first)},decls:17,vars:4,consts:[["color","light"],["slot","start"],["defaultHref","detail"],[4,"ngFor","ngForOf"],["align-items-center","","no-padding",""],["size","10"],["autosize","","maxRows","4",1,"message-input",3,"ngModel","ngModelChange"],["size","2"],["expand","block","fill","clear","color","primary",1,"msg-btn",3,"disabled","click"],["name","send-outline"],["size","9","class","message other-message",4,"ngIf"],["offset","3","size","9","class","message my-message",4,"ngIf"],["size","9",1,"message","other-message"],["text-right","",1,"time"],["offset","3","size","9",1,"message","my-message"]],template:function(e,t){1&e&&(g.Vb(0,"ion-header"),g.Vb(1,"ion-toolbar",0),g.Vb(2,"ion-buttons",1),g.Rb(3,"ion-back-button",2),g.Ub(),g.Vb(4,"ion-title"),g.Ec(5),g.Ub(),g.Ub(),g.Ub(),g.Vb(6,"ion-content"),g.Vb(7,"ion-grid"),g.Cc(8,A,3,2,"ion-row",3),g.Ub(),g.Vb(9,"ion-footer"),g.Vb(10,"ion-toolbar"),g.Vb(11,"ion-row",4),g.Vb(12,"ion-col",5),g.Vb(13,"textarea",6),g.gc("ngModelChange",function(e){return t.newMsg=e}),g.Ub(),g.Ub(),g.Vb(14,"ion-col",7),g.Vb(15,"ion-button",8),g.gc("click",function(){return t.sendMessage()}),g.Rb(16,"ion-icon",9),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e&&(g.Eb(5),g.Fc(t.customerName),g.Eb(3),g.oc("ngForOf",t.listOfMessage),g.Eb(5),g.oc("ngModel",t.newMsg),g.Eb(2),g.oc("disabled",""===t.newMsg))},directives:[l.r,l.R,l.j,l.f,l.g,l.P,l.l,l.q,c.m,l.p,l.F,l.k,d.a,y,d.i,d.k,l.i,l.s,c.n],pipes:[c.f],styles:[".message[_ngcontent-%COMP%]{padding:10px;border-radius:10px;margin-bottom:4px;white-space:pre-wrap}.other-message[_ngcontent-%COMP%]{background:var(--ion-color-tertiary);color:#fff}.my-message[_ngcontent-%COMP%]{background:var(--ion-color-secondary);color:#fff}.time[_ngcontent-%COMP%]{color:#dfdfdf;float:right;font-size:small}.msg-btn[_ngcontent-%COMP%]{--padding-start:0.5em;--padding-end:0.5em;margin-top:10px}.message-input[_ngcontent-%COMP%]{width:100%;border:1px solid var(--ion-color-medium);border-radius:10px;background:#fff;resize:none;padding-left:10px;padding-right:10px}ion-fab[_ngcontent-%COMP%]{width:100%}"]}),k)}],C=((R=function t(){e(this,t)}).\u0275fac=function(e){return new(e||R)},R.\u0275mod=g.Ob({type:R}),R.\u0275inj=g.Nb({imports:[[h.j.forChild(M)],h.j]}),R),U=((_=function t(){e(this,t)}).\u0275fac=function(e){return new(e||_)},_.\u0275mod=g.Ob({type:_}),_.\u0275inj=g.Nb({imports:[[c.c,d.e,l.S,C,d.m,I]]}),_)},ldse:function(t,i,s){"use strict";s.d(i,"a",function(){return a});var r=s("2Vo4"),o=s("fXoL"),a=function(){var t=function(){function t(){e(this,t),this.currentAddress=new r.a({}),this.restaurant=new r.a({}),this.status=new r.a({}),this.location=new r.a({}),this.orderId=new r.a({}),this.RestaurantLocation=new r.a({}),this.resId=new r.a({}),this.listOfCatagoryFilter=new r.a({}),this.deriverId=new r.a({}),this.customerId=new r.a({}),this.driverName=new r.a({})}return n(t,[{key:"getCurrentAddress",value:function(){return this.currentAddress}},{key:"getMenuFilter",value:function(){return this.listOfCatagoryFilter}},{key:"getLocation",value:function(){return this.location}},{key:"getStatus",value:function(){return this.status}},{key:"getRestaurantLocation",value:function(){return this.RestaurantLocation}},{key:"getRestaurantId",value:function(){return this.resId}},{key:"getDriverId",value:function(){return this.deriverId}},{key:"getCustomerId",value:function(){return this.customerId}},{key:"getDriverName",value:function(){return this.driverName}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();