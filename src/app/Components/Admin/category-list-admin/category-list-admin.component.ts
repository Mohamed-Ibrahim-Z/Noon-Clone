import { Component, Input } from '@angular/core';
import { MainlistComponent } from '../mainlist/mainlist.component';

@Component({
  selector: 'app-category-list-admin',
  standalone: true,
  imports: [MainlistComponent],
  templateUrl: './category-list-admin.component.html',
  styleUrl: './category-list-admin.component.css',
})
export class CategoryListAdminComponent {
  @Input() categories: string[] = [
    'Electronics',
    'Mobiles',
    'SuperMarket',
    'BeautyHealth',
  ];
}
