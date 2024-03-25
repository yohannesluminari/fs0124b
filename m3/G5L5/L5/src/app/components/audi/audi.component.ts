import { Component } from '@angular/core';
import { DbService } from '../../auto.service';
import { iAuto } from '../../models/auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {


  audiCars: iAuto[] = [];

  constructor(private autoSvc: DbService) {}

  ngOnInit() {
    this.autoSvc.getAudiCars().then(res => {
      this.audiCars = res;
    });

  }
  getCardBackgroundColor(available: boolean): string {
    return available ? 'green' : 'red';
  }
}
