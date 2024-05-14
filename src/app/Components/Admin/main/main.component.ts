import { Component, Input } from '@angular/core';
import { CardListComponent } from '../../Shared/card-list/card-list.component';
import { Product } from '../../../Models/product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardListComponent, CurrencyPipe, RouterModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() product: Product;
  constructor() {
    this.product = new Product(0, 'X', 1000, 1, 4000, 4.5, '');
  }

  deleteProduct() {
    console.log(this.product.id);
  }
}
