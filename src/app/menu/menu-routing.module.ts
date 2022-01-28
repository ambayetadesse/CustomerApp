import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cart-modal',
        loadChildren: () => import('../cart-modal/cart-modal.module').then(m => m.CartModalPageModule)
      },

      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'order-history',
        loadChildren: () => import('../order-history/order-history.module').then(m => m.OrderHistoryPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'account-details',
        loadChildren: () => import('../account-details/account-details.module').then(m => m.AccountDetailsPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
