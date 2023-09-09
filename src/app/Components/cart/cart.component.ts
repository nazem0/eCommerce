import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/i-product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  TotalPrice:number=0
  CartList:IProduct[]=[]
constructor(public CartService:CartService)
{
  
  // this.TotalPrice+=product.price
}
ngOnInit()
{
  this.CartList = this.CartService.CartList
  this.CartList.forEach(Product => {
    this.TotalPrice+=Product.price
  });
}
}
