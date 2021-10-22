import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { AccountService } from '../Service/account.service';
import { Account, Location } from '../../Table/table';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {
  regform = this.fb.group({});
  usePicker: boolean;
  listOfAccount: Account[];
  locationId: any;
  active: any;
  type: any;
  constructor(private fb: FormBuilder, private platform: Platform,
              private accountService: AccountService) { }
  ngOnInit() {
    const id = localStorage.getItem('userId');
    this.accountService.getAllAccount().subscribe(res => {
      this.locationId = res.find(c=>c.id==+id).Location;
      this.active = res.find(c=>c.id==+id).active;
      this.type = res.find(c=>c.id ==+id).type;
      this.regform.get('FullName').setValue(res.find(c => c.id === +id).fullName);
      this.regform.get('phonenumber').setValue(res.find(c => c.id === +id).phonenumber);
      this.regform.get('email').setValue(res.find(c => c.id === +id).email);
      this.regform.get('password').setValue(res.find(c => c.id === +id).password);
    });
    this.regform = this.fb.group({
      email: ['', Validators.email],
      phonenumber: ['', Validators.required],
      password: ['', Validators.required],
      FullName: ['', Validators.required],
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }
  SaveAccount(){
    var data = {
      id:localStorage.getItem('userId'),
      email: this.regform.get('email').value,
      phonenumber:this.regform.get('phonenumber').value,
      password: this.regform.get('password').value,
      fullName: this.regform.get('FullName').value,
      locationId:this.locationId,
      active: this.active,
      type: this.type
    }
    this.accountService.updateAccount(data).subscribe(res=>{
      // alert(res.toString());
    })
    alert("successfully Updated");
  }
}
