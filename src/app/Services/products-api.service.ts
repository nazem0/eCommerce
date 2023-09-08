import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private AllProducts: string = 'https://fakestoreapi.com/products/';
  private SelectedProduct:any;
  constructor(private httpClient: HttpClient) { }

  GetProducts(): any {
    return this.httpClient.get(this.AllProducts)
  }

  GetProductsByCategory(category: string): any {
    // this.SelectedCategory = category;
    // return this.httpClient.get(this.SelectedCategoryURI)
  }
  GetProductById(id: number): any {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
