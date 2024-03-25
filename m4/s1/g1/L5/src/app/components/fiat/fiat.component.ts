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

}

