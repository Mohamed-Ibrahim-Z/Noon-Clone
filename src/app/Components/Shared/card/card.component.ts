import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '../../../Pips/currency.pipe';
import { Product } from '../../../Models/product';
import { RatersPipe } from '../../../Pips/raters.pipe';
3;

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CurrencyPipe, RatersPipe],
})
export class CardComponent {
  @Input() product: Product;
  constructor() {
    this.product = new Product(0, 'X', 1000, 1, 4000, 4.5, '');
  }
}
