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
}
