import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupCustomerPageRoutingModule } from './signup-customer-routing.module';
import { SignupCustomerPage } from './signup-customer.page';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupCustomerPageRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  declarations: [SignupCustomerPage]
})
export class SignupCustomerPageModule {}
