import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../Models/category';
import { Product } from '../../../Models/product';
import { CategoriesService } from '../../../Services/categories.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-mainlist',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MainComponent],
  providers: [CategoriesService],
  templateUrl: './mainlist.component.html',
  styleUrl: './mainlist.component.css',
})
export class MainlistComponent implements OnInit {
  cat: Category;
  products: Product[] = [];
  @Input() category: string = '';
  constructor(private categoriesService: CategoriesService) {
    this.cat = new Category(0, '', []);
  }
  ngOnInit(): void {
    if (this.category === '') return;
    this.categoriesService.getCategories(this.category).subscribe({
      next: (data: any) => {
        this.cat = data[0];
        this.products = data[0].products;
      },
    });
  }
}
