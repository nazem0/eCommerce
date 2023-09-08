import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product:IProduct|null=null;
  // Product:IProduct={
  //   id:2,
  //   title:"test",
  //   image:"",
  //   category:"",
  //   description:"",
  //   price:2,
  //   rating:{
  //     rate:2,
  //     count:2
  //   }
  // }
  constructor(private route: ActivatedRoute,private ProductApi:ProductsApiService) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let ProductId=Number(params.get("id"));
      this.ProductApi.GetProductById(ProductId).subscribe((response:IProduct)=>
      {
        this.Product=response;
      })
    })
    
  }
}
