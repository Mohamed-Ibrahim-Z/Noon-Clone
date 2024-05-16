import { Component, Input } from '@angular/core';
import { CardListComponent } from '../Shared/card-list/card-list.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  @Input() categories: string[] = [
    'Electronics',
    'Mobiles',
    'SuperMarket',
    'BeautyHealth',
  ];
  constructor() {}
}
