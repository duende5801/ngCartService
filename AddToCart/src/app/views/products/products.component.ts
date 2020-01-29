import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IProduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }
  addToCart(p: IProduct) {
    this.dService.addToCart(p);
  }

}
