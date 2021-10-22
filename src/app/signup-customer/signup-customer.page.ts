import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Account } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { SharedService } from '../Service/shared.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.page.html',
  styleUrls: ['./signup-customer.page.scss'],
})
export class SignupCustomerPage implements OnInit {
  regform = this.fb.group({});
  accountId: any;
  fieldTextType: boolean;
  conformPassword:boolean;
  phoneNumber:number;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  Address: { lat: any; lon: any; };
  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private alertController: AlertController,
    private router: Router,
    private geolocation:Geolocation,
    private sharedService:SharedService) { }

  ngOnInit() {
   let currentAddress = this.sharedService.getCurrentAddress().value;
    console.log(currentAddress);
    this.regform = this.fb.group({
      FullName: ["", Validators.required],
      email: ["", Validators.required],
      phonenumber: ["", Validators.required],
      locationId: [''],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      type:[""],
      active:[""],
    })
    this.getCurrentCoordinates();
  }
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.Address ={
        lat:this.latitude,
        lon:this.longitude
      }
      this.sharedService.currentAddress.next(this.Address);
     // this.getAddress(this.latitude,this.longitude);
      console.log(resp.coords);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  registerAccount() {
    if (this.regform.get("password").value === this.regform.get("confirmPassword").value) {
      if (this.regform.valid) {
        this.regform.get("locationId").setValue(this.Address);
          this.regform.get("active").setValue("true");
          this.regform.get("type").setValue("customer");
          this.regform.get("phonenumber").setValue((this.regform.get("phonenumber").value).internationalNumber)
          this.accountService.create(this.regform.value).subscribe(res=>{
           // alert(res.toString());
          });
          this.router.navigate(["/menu/login"]);
        }
        
    else {
        this.ErrorAlert("Please Enter All field.");
      }
    }
    else{
      this.ErrorAlert("Password donot match");
    }
  }
  login() {
    this.router.navigate(["/menu/login"]);
  }
  async presentAlertConfirm(account: Account) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Are you sure you want delete?</strong>',
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
            this.accountService.removeAccount(account.id);
            this.regform.reset();
            this.accountId = null;
          }
        }
      ]
    });

    await alert.present();
  }
  async ErrorAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  conPassword(){
    this.conformPassword = !this.conformPassword;
  }
}
