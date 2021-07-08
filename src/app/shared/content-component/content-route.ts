import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  // {
  //   path: 'cart',
  //   loadChildren: () =>
  //     import('../../cart/cart-routing.module').then((m) => m.CartRoutingModule),
  // },
];
