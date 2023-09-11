import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/i-product';
import { CartService } from 'src/app/Services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  TotalPrice: number=0;
  CartList: IProduct[] = [];
  constructor(public CartService: CartService) {
    // this.TotalPrice+=product.price
  }
  ngOnInit() {
    this.CartService.cart.subscribe((response)=>{
      this.CartList = response;
    })
    // this.CartService.TotalPrice.subscribe((response)=>
    // {
    //   this.TotalPrice=response
    // })
    // console.log(this.CartList);
    // if(this.CartList)
    // {
    //   this.CartList.forEach((Product) => {
    //     this.TotalPrice += Product.price;
    //   });
      
    // }
  }
}
