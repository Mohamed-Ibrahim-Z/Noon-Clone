import { Component } from '@angular/core';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, FormsModule],
  providers: [CategoriesService],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  ID = 0;
  Myproduct: any;
  category: string = '';
  isAdmin = true;
  constructor(
    private categoriesService: CategoriesService,
    private myActived: ActivatedRoute,
    private router: Router
  ) {
    this.ID = myActived.snapshot.params['id'];
    this.category = myActived.snapshot.params['category'];
    if (UserService.currentUser === null) {
      this.router.navigate(['/login']);
    } else if (UserService.currentUser.isAdmin === false) {
      this.isAdmin = false;
    }

    this.categoriesService.getCategories(this.category).subscribe({
      next: (response: any) => {
        this.Myproduct = response[0].products.filter(
          (product: any) => product.id == this.ID
        )[0];
        console.log('my product', this.Myproduct);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  updateProduct() {
    this.categoriesService.updateProductInCategory(
      this.category,
      this.ID,
      this.Myproduct
    );
  }
}
