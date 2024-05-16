import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [CategoriesService],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  img: string = '';
  name: string = '';
  price: number | null = null;
  category: string = '';

  constructor(private categoriesService: CategoriesService) {}
  addProduct() {
    console.log('Here');
    if (this.img && this.name && this.price && this.category) {
      let product: Product = {
        id: 0,
        img: this.img,
        name: this.name,
        price: this.price,
        bestseller: 1,
        rating: 0,
        numberofrating: 0,
      };

      this.categoriesService.addProductInCategory(this.category, product);
    }
  }
}
