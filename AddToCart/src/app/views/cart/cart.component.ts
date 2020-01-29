import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IProduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: IProduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.setCart();
  }
  removeFromCart(id: IProduct) {
    console.log(id);
    this.dService.removeFromCart(id);
  }
  removeAll() {
    this.dService.emptyCart();
  }


}
