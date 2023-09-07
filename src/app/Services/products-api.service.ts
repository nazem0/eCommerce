import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private url = 'https://fakestoreapi.com/products/';
  private Products:IProduct[]=[];
  constructor(private httpClient: HttpClient) { }

  GetProducts():any{
    return this.httpClient.get<IProduct[]>(this.url)
  }

  GetProductsByCategory(category:string):any{
    this.httpClient.get<IProduct[]>(this.url)
    return 
  }


}
