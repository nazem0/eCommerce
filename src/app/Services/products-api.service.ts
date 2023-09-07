import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private AllProducts :string = 'https://fakestoreapi.com/products/';
  public SelectedCategory :string = ''
  public SelectedProduct: number=-1;
  private SelectedCategoryURI:string=`https://fakestoreapi.com/products/category/${this.SelectedCategory}`
  private SelectedProductURI:string=`https://fakestoreapi.com/products/${this.SelectedProduct}`
  // private Products:IProduct[]=[];
  constructor(private httpClient: HttpClient) { }

  GetProducts():any{
    return this.httpClient.get(this.AllProducts)
  }

  GetProductsByCategory(category:string):any{
    this.SelectedCategory = category;
    return this.httpClient.get(this.SelectedCategoryURI)
  }
  GetProductById(id:number):any{
    this.SelectedProduct = id;
    return this.httpClient.get(this.SelectedProductURI)
  }
}
