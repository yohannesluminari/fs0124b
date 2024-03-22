import { iAuto } from './models/auto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  autoArr:iAuto[]=[];

  getAllAuto():Promise<iAuto[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then( (res) => {

      return this.autoArr = res

    })
  }
  getFiatCars(): Promise<iAuto[]> {
    return this.getAllAuto().then(res => {
      return res.filter(auto => auto.brand === 'Fiat');
    });
  }


  getFordCars(): Promise<iAuto[]> {
    return this.getAllAuto().then(res => {
      return res.filter(auto => auto.brand === 'Ford');
    });
  }
  getAudiCars(): Promise<iAuto[]> {
    return this.getAllAuto().then(res => {
      return res.filter(auto => auto.brand === 'Audi');
    });
  }


}
