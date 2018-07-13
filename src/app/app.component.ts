import { Component } from '@angular/core';
//
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '//ae01.alicdn.com/kf/HTB1NuK4kRcHL1JjSZFBq6yiGXXa3.jpg_350x350.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket', '//ae01.alicdn.com/kf/HTB13x8iLXXXXXaVapXXq6xXFXXXA.jpg_350x350.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat', '//ae01.alicdn.com/kf/HTB12IaeSpXXXXXNXXXXq6xXFXXX3.jpg_350x350.jpg', ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
