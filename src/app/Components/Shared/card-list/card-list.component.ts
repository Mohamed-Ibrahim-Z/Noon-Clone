import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../../Models/category';
import { Product } from '../../../Models/product';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { User } from '../../../Models/User';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';

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
  @Input() category: string = '';
  currentUser: any;
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private rout: ActivatedRoute
  ) {
    console.log('CardListComponent Initialized');
    this.cat = new Category(0, '', []);
    if (!UserService.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      let categoryParam = params.get('category');
      if (categoryParam) {
        this.categoriesService.getCategories(categoryParam).subscribe({
          next: (data: any) => {
            this.cat = data[0];
            this.products = data[0].products;
          },
          error: (error: any) => {
            console.error('Error fetching categories:', error);
          },
        });
      } else {
        if (this.category === '') {
          this.router.navigate(['/']);
        }
        if (this.category !== '') {
          this.categoriesService.getCategories(this.category).subscribe({
            next: (data: any) => {
              this.cat = data[0];
              this.products = data[0].products;
            },
            error: (error: any) => {
              console.error('Error fetching categories:', error);
            },
          });
        }
      }
    });
  }
}
