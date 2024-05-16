import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { Router } from '@angular/router';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient, private router: Router) {}

  getCategories(category: string) {
    return this.http.get('http://localhost:3000/categories?name=' + category);
  }

  addProductInCategory(category: string, product: Product) {
    this.getCategories(category).subscribe({
      next: (category: any) => {
        let flag = 0;
        product.id = category[0].products.length + 1;
        for (let i = 1; i < category[0].products.length; i++) {
          if (
            category[0].products[i].id !=
            category[0].products[i - 1].id + 1
          ) {
            product.id = category[0].products[i - 1].id + 1;
            category[0].products.splice(i, 0, product);
            flag = 1;
            break;
          }
        }
        if (flag == 0) category[0].products.push(product);
        this.http
          .put('http://localhost:3000/categories/' + category[0].id, {
            ...category[0],
          })
          .subscribe(() => {
            this.router.navigate(['/']);
          });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  deleteProductInCategory(categoryName: string, productId: number) {
    this.getCategories(categoryName).subscribe({
      next: (category: any) => {
        // Filter out the product to be deleted
        const updatedProducts = category[0].products.filter(
          (product: any) => product.id != productId
        );
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
          .subscribe({
            next: () => {
              this.router.navigate(['/main']);
            },
            error: (error) => {
              console.error(error);
            },
          });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
