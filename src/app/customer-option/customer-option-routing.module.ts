import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerOptionPage } from './customer-option.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerOptionPageRoutingModule {}
