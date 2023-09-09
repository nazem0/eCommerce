import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartList:IProduct[]=[]
  
  constructor(private ProductApi:ProductsService) { }

  AddToCart(id:number)
  {
    this.ProductApi.GetProductById(id).subscribe(
      (response)=>{
        let product = response as IProduct;
        this.CartList.push(product)
      }
    )
    
  }
}
