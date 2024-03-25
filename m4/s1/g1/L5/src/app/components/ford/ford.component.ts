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


}
