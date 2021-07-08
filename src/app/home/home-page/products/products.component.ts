import { Component, OnInit, EventEmitter } from '@angular/core';

import { DataServiceService } from '../../../shared/services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  event = new EventEmitter<[]>();
  constructor(private _product: DataServiceService) {}

  ngOnInit(): void {
    this.productList = this._product.productList;
  }

  addToCart(item: any) {
    this._product.addToCart(item);
  }
}
