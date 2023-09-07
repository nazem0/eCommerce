import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  
  private url = 'https://fakestoreapi.com/products/categories';
  constructor(private httpClient: HttpClient) {
  }

  getCategories():any{
    return this.httpClient.get(this.url);
  }
}
