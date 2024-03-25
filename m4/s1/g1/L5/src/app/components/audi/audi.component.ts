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

}
