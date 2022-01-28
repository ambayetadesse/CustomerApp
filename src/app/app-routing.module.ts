import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import("./menu/menu.module").then(m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'signup-customer',
    loadChildren: () => import('./signup-customer/signup-customer.module').then(m => m.SignupCustomerPageModule)
  },
  {
    path: 'customer-option',
    loadChildren: () => import('./customer-option/customer-option.module').then(m => m.CustomerOptionPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'googlemap',
    loadChildren: () => import('./googlemap/googlemap.module').then(m => m.GooglemapPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
