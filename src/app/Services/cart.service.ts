import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../Models/i-product';
import { BehaviorSubject } from 'rxjs';
// NgRx library to make all the tabs using the current angular applicatin synchronize the changes happened
@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartList: IProduct[] = [];
  cart: BehaviorSubject<IProduct[]>;
  // TotalPrice:BehaviorSubject<number>;
  constructor(private ProductApi: ProductsService) {
    this.CartList = JSON.parse(localStorage.getItem('Cart')!);
    this.cart = new BehaviorSubject<IProduct[]>(
      JSON.parse(localStorage.getItem('Cart')!)
    );
    // this.TotalPrice=new BehaviorSubject<number>(0)
  }
  AddToCart(id: number) {
    this.ProductApi.GetProductById(id).subscribe((response) => {
      let product = response as IProduct;
      if (!this.CartList) {
        this.CartList = [];
      }
      this.CartList.push(product);
      // this.TotalPrice.next(this.TotalPrice['_value']+=product.price);
      this.PushToDataBase()
    });
  }

  RemoveProductFromCart(index: number) {
    // this.TotalPrice-=this.CartList[index].price;
    this.CartList.splice(index,1)
    this.PushToDataBase()
  }
  ClearCart() {
    this.CartList=[]
    // this.TotalPrice=0
    this.PushToDataBase()
  }
  PushToDataBase()
  {
    // this.TotalPrice.next(0)
    localStorage.setItem('Cart', JSON.stringify(this.CartList));
    this.cart.next(JSON.parse(localStorage.getItem('Cart')!));
  }
}
