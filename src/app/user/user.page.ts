import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  windowRef: any;
  //phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  regform = this.fb.group({});
  selectedCustomer: any;
	recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  phoneNumber:number;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private fb: FormBuilder,
    private alertCtrl:AlertController,
    private modalController:ModalController,
    private router:Router
    ) { }
   
  ngOnInit() {
    this.regform = this.fb.group({
      empId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone:['',Validators.required]
    });
   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
}
 
  changePreferredCountries() {
		this.preferredCountries = [CountryISO.Ethiopia, CountryISO.Eritrea];
	}
 signIn(phoneNumber: any){
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = phoneNumber.internationalNumber;
  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( async (confirmationResult) => {
    let prompt = await this.alertCtrl.create({
    inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
    buttons: [
      { text: 'Cancel',
      handler: data => { console.log('Cancel clicked'); }
      },
      { text: 'Send',
      handler: data => {
        confirmationResult.confirm(data.confirmationCode)
        .then(function (result) {
        console.log(result.user);
        this.router.navigate(['/menu/home']); 
         }).catch(function (error) {
      });
      }
      }
    ]
    });
    await prompt.present();
  })
  .catch(function (error) {
    console.error("SMS not sent", error);
  });
  
  }

}
