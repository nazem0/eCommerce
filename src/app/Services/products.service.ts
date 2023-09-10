import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private AllProducts: string = 'https://fakestoreapi.com/products/';
  constructor(private httpClient: HttpClient) { }
  GetProducts(): any {
    return this.httpClient.get(this.AllProducts)
  }
  GetProductsByCategory(category: string): any {
    // this.SelectedCategory = category;
    // return this.httpClient.get(this.SelectedCategoryURI)
  }
  GetProductById(id: number): Observable<object> {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }


}
