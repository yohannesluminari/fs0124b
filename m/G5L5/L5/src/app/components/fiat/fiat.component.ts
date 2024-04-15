import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';
import { DbService } from '../../auto.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  fiatCars: iAuto[] = [];

  constructor(private autoSvc: DbService) {}

  ngOnInit() {
    this.autoSvc.getFiatCars().then(res => {
      this.fiatCars = res;
    });

  }
  getCardBackgroundColor(available: boolean): string {
    return available ? 'green' : 'red';
  }
}

