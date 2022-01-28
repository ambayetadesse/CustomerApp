import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  listOfAccount: any;
  address: any;
  email: string;
  phonenumber: string;

  constructor(private accountService: AccountService, private callNumber: CallNumber,) { }

  ngOnInit() {
    this.accountService.getAllAccount().subscribe(res => {
      let id = localStorage.getItem('userId');
      this.address = res.find(c => c.id == +id).locationId;
      this.email = res.find(c => c.id == +id).email;
      this.phonenumber = res.find(c => c.id == +id).phonenumber
    })
  }
  call() {
    this.callNumber.callNumber(this.phonenumber, true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  policy() {

  }
  condition() {

  }
  mail() {

  }
}
