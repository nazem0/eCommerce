import { Component, OnChanges, OnInit } from '@angular/core';
import { CategoriesApiService } from 'src/app/Services/categories-api.service';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnChanges {
  SelectedCategory: string;
  Categories!: string[];
  constructor(private CategoriesService: CategoriesApiService, private ProductsService: ProductsService) {
    this.SelectedCategory = 'All';
  }
  ngOnInit() {
    this.CategoriesService.getCategories().subscribe((Response: string[]) => this.Categories = Response);
  }
  ngOnChanges() { }

  GetSelectedCategory(_category: string) {
    this.SelectedCategory = _category;
  }
}
