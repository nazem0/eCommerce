import { Component, OnChanges, OnInit } from '@angular/core';
import { CategoriesApiService } from 'src/app/Services/categories-api.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnChanges {
  SelectedCategory: string;
  Categories!: string[];
  constructor(private categoriesService: CategoriesApiService) {
    this.SelectedCategory = 'All';
  }
  ngOnInit() {
    this.categoriesService.getCategories().subscribe((Response: string[]) => this.Categories = Response);
  }
  ngOnChanges() { }

  GetSelectedCategory(_category: string) {
    // Tested
    this.SelectedCategory = _category;
  }
}
