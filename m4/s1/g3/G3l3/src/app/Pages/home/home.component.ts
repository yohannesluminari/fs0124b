import { Component, OnInit } from '@angular/core';
import { iProdotti } from '../../Models/prodotti';
import { ProdottoService } from '../../prodotti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  prodotti: iProdotti[] = [];

  constructor(private prodottoSvc: ProdottoService) {}

  ngOnInit() {
    this.prodottoSvc.getAll().subscribe(prodotti => {
      this.prodotti = this.prodotti
      console.log('sono dentro qui')
      console.log(prodotti)
    })

  }

}
