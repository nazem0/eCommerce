import { Component, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/i-product';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  constructor(private ProductsApi: ProductsApiService) {
    
  }
  ngOnInit() {
    this.ProductsApi.GetProducts().subscribe((response: any) => {
      this.products=response;
    });
  }
}
