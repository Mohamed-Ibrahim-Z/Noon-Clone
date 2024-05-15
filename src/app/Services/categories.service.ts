import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient, private router:Router) {}

  getCategories(category: string) {
    return this.http.get('http://localhost:3000/categories?name=' + category);
  }

 
  deleteProductInCategory(
    categoryName: string,
    productId: number
  ) {
    this.getCategories(categoryName).subscribe({
      next: (category: any) => {
        // Filter out the product to be deleted
        const updatedProducts = category[0].products.filter((product: any) => product.id != productId);
        category[0].products = updatedProducts;
        // Send a PUT request to update the category without the deleted product
        this.http
          .put('http://localhost:3000/categories/' + category[0].id, {
            ...category[0],
          })
          .subscribe(() => {
            // Navigate to a different route after successful deletion
            //alert("abdo 7beby");
            window.location.reload();
          });
      },
      error: (error) => {
        console.error(error);
      },
    });
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
