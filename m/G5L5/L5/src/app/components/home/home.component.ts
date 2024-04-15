import { DbService } from './../../auto.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iAuto } from '../../models/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  autoArr: iAuto[] = [];

  constructor(private autoSvc: DbService, private router: Router) {} // Inietta Router nel costruttore

  ngOnInit() {
    this.autoSvc.getAllAuto().then(res => {
      this.autoArr = res;
    });
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

  redirectToBrand(brand: string) {
    switch (brand) {
      case 'Ford':
        this.router.navigate(['/ford']);
        break;
      case 'Fiat':
        this.router.navigate(['/fiat']);
        break;
      case 'Audi':
        this.router.navigate(['/audi']);
        break;
      default:
        break;
    }
  }
}
