import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private ProductIdParam!:number;
  Product!:IProduct;
  constructor(private route: ActivatedRoute,private ProductApi:ProductsService) {
    
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.ProductIdParam=Number(params.get("id"));      
    })
    this.ProductApi.GetProductById(this.ProductIdParam!).subscribe((response)=>
      {
        this.Product=response as IProduct;
      })
    
  }
}
