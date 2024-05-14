import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(category: string) {
    return this.http.get('http://localhost:3000/categories?name=' + category);
  }

  updateProductInCategory(
    categoryName: string,
    productId: number,
    updatedProductData: any
  ) {
    this.getCategories(categoryName).subscribe({
      next: (category: any) => {
        // Products { updatedProductData } Products
        const updatedProducts = category[0].products.map((product: any) => {
          if (product.id == productId) {
            return { ...product, ...updatedProductData };
          }
          return product;
        });
        category[0].products = updatedProducts;
        this.http
          .put('http://localhost:3000/categories/' + category[0].id, {
            ...category[0],
          })
          .subscribe();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
