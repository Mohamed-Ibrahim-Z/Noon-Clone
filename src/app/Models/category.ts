import { Product } from './product';

export class Category {
  id: number;
  name: string;
  products: Product[];

  constructor(id: number, name: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}
