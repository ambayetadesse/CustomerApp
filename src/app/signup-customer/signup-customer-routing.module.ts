import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupCustomerPage } from './signup-customer.page';

const routes: Routes = [
  {
    path: '',
    component: SignupCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupCustomerPageRoutingModule {}
