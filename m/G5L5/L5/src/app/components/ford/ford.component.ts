import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';
import { DbService } from '../../auto.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  fordCars: iAuto[] = [];

  constructor(private autoSvc: DbService) {}

  ngOnInit() {
    this.autoSvc.getFordCars().then(res => {
      this.fordCars = res;
    });

  }
  getCardBackgroundColor(available: boolean): string {
    return available ? 'green' : 'red';
  }

}
