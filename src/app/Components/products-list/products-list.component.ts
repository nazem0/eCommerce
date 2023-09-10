import { Component, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/i-product';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  SearchedTitle:string|null="";
  products!: IProduct[];
  constructor(private ProductsApi: ProductsService, public CartService: CartService, private ActivatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(
       (params) => this.SearchedTitle=params.get("SearchedTitle")
    )
    this.ProductsApi.GetProducts().subscribe((response: any) => {
      this.products = response;

      this.products = this.products.filter((product) => {
        if (this.SearchedTitle!=null) {
          return product.title.toLowerCase().match(this.SearchedTitle.toLowerCase())
        }
        return product
      }
      )
    }
    )
  };
}
