import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../../Models/category';
import { Product } from '../../../Models/product';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CardComponent],
  providers: [CategoriesService],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
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

  ngOnInit() {
    let id = 1;
    this.categoriesService.getCategories('Electronics').subscribe({
      next: (response: any) => {
        console.log(
          response[0].products.filter((product: any) => product.id === id)[0]
        );
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
