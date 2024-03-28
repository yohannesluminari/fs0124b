import { Component } from '@angular/core';
import { iProduct } from '../../Models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  show:boolean = false

  products:iProduct[] = []

  constructor(private prodSvc:ProductService){}

  ngOnInit(){

    this.prodSvc.$cart.subscribe((p: iProduct) => {
      this.products.push(p)
    })

  }


}
