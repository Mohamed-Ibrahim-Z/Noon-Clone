import { Component, Input } from '@angular/core';
import { MainlistComponent } from '../mainlist/mainlist.component';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-category-list-admin',
  standalone: true,
  imports: [MainlistComponent],
  templateUrl: './category-list-admin.component.html',
  styleUrl: './category-list-admin.component.css',
})
export class CategoryListAdminComponent {
  isAdmin = true;
  @Input() categories: string[] = [
    'Electronics',
    'Mobiles',
    'SuperMarket',
    'BeautyHealth',
  ];

  constructor(private router: Router) {
    if (UserService.currentUser === null) {
      this.router.navigate(['/login']);
    } else if (UserService.currentUser.isAdmin === false) {
      this.isAdmin = false;
    }
  }
}
