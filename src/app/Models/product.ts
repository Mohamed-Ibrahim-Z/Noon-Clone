export class Product {
  id: number;
  name: string;
  price: number;
  bestseller: number;
  numberofrating: number;
  rating: number;
  img: string;

  constructor(
    id: number,
    name: string,
    price: number,
    bestseller: number,
    numberofrating: number,
    rating: number,
    img: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.bestseller = bestseller;
    this.numberofrating = numberofrating;
    this.rating = rating;
    this.img = img;
  }
}
