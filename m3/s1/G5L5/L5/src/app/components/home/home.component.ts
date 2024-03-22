import { DbService } from './../../auto.service';
import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  autoArr:iAuto[] = [];


  constructor(private autoSvc:DbService){}

  ngOnInit(){

    this.autoSvc.getAllAuto().then(res => {

      this.autoArr = res;

    })

  }

  getCardBackgroundColor(brand: string): string {
    switch (brand) {
      case 'Ford':
        return '#3399ff';
      case 'Fiat':
        return '#ffcc00';
      case 'Audi':
        return '#ff6666';
      default:
        return '#ffffff';
    }
  }
}
