import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerOptionPageRoutingModule } from './customer-option-routing.module';

import { CustomerOptionPage } from './customer-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerOptionPageRoutingModule
  ],
  declarations: [CustomerOptionPage]
})
export class CustomerOptionPageModule {}
