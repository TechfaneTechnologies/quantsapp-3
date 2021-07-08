import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartProduct: any;
  constructor(private _product: DataServiceService) {}

  ngOnInit(): void {
    debugger;
    this.cartProduct = this._product.cartList;
    console.log(this.cartProduct);
  }
}
