import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { iProduct } from '../../Models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products:iProduct[] = [];

  constructor(private productSvc:ProductService){}


  ngOnInit(){

    this.productSvc.getAll().subscribe(pippo => {

      this.products = pippo

    })

  }

  addToCart(product:iProduct){

    this.productSvc.addToCart(product)

  }

}
