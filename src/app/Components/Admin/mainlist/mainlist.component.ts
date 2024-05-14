import { Component } from '@angular/core';
import { Category } from '../../../Models/category';
import { Product } from '../../../Models/product';
import { CategoriesService } from '../../../Services/categories.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-mainlist',
  standalone: true,
  imports: [HttpClientModule, CommonModule,MainComponent],
  providers: [CategoriesService],
  templateUrl: './mainlist.component.html',
  styleUrl: './mainlist.component.css'
})
export class MainlistComponent {
  cat: Category;
  products: Product[] = [];
  constructor(private categoriesService: CategoriesService) {
    this.cat = new Category(0, '', []);
    this.categoriesService.getCategories('Electronics').subscribe({
      next: (data: any) => {
        this.cat = data[0];
        this.products = data[0].products;
      },
    });
  }
}
