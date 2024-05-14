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
}
