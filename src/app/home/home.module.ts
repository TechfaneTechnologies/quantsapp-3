import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { ProductsComponent } from './home-page/products/products.component';
import { CartModule } from '../../app/cart/cart.module';

@NgModule({
  declarations: [HomePageComponent, BannerComponent, ProductsComponent],
  imports: [CommonModule, HomeRoutingModule, CartModule],
})
export class HomeModule {}
