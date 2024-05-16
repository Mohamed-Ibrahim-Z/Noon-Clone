import { Component, Input } from '@angular/core';
import { CardListComponent } from '../../Shared/card-list/card-list.component';
import { Product } from '../../../Models/product';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CurrencyPipe } from '../../../Pips/currency.pipe';
import { CategoriesService } from '../../../Services/categories.service';
import { RatersPipe } from '../../../Pips/raters.pipe';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardListComponent,
    CurrencyPipe,
    RouterModule,
    RouterLink,
    RatersPipe,
  ],
  providers: [CategoriesService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() product: Product;
  @Input() category: string = '';
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.product = new Product(0, 'X', 1000, 1, 4000, 4.5, '');
  }

  deleteProduct() {
    this.categoriesService.deleteProductInCategory(
      this.category,
      this.product.id
    );
    this.router.navigate(['/main']);
  }
}
