import { iAuto } from './models/auto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  autoArr:iAuto[] = [
    {
        id:1,
        brand: "Fiat",
       brandLogo: "https://picsum.photos/100/100?random=7",
       model: "500L",
      modelImage: "https://picsum.photos/200/300?random=1",
      year: 2015,
        price: 7500,
       available: false
    },
    {
      id:2,
        brand: "Fiat",
       brandLogo: "https://picsum.photos/100/100?random=7",
       model: "500 Abarth",
      modelImage: "https://picsum.photos/200/300?random=2",
      year: 2010,
        price: 3500,
       available: true
    },
    {
      id:3,
        brand: "Ford",
       brandLogo: "https://picsum.photos/100/100?random=8",
       model: "Taurus",
      modelImage: "https://picsum.photos/200/300?random=3",
      year: 2009,
        price: 5200,
       available: false
    },
    {
      id:4,
        brand: "Ford",
       brandLogo: "https://picsum.photos/100/100?random=8",
       model: "Focus",
      modelImage: "https://picsum.photos/200/300?random=4",
      year: 2014,
        price: 9700,
       available: true
    },
    {
      id:5,
        brand: "Audi",
       brandLogo: "https://picsum.photos/100/100?random=9",
       model: "A3",
      modelImage: "https://picsum.photos/200/300?random=5",
      year: 2012,
        price: 4300,
       available: true
    },
    {
      id:6,
        brand: "Audi",
       brandLogo: "https://picsum.photos/100/100?random=9",
       model: "Q7",
      modelImage: "https://picsum.photos/200/300?random=6",
      year: 2020,
        price: 41700,
       available: false
    }
]
;

  // getAllAuto():Promise<iAuto[]>{

  //   return fetch('../assets/db.json')
  //   .then(res => res.json())
  //   .then( (res) => {

  //     return this.autoArr = res

  //   })
  // }
  // getFiatCars(): Promise<iAuto[]> {
  //   return this.getAllAuto().then(res => {
  //     return res.filter(auto => auto.brand === 'Fiat');
  //   });
  // }


  // getFordCars(): Promise<iAuto[]> {
  //   return this.getAllAuto().then(res => {
  //     return res.filter(auto => auto.brand === 'Ford');
  //   });
  // }
  // getAudiCars(): Promise<iAuto[]> {
  //   return this.getAllAuto().then(res => {
  //     return res.filter(auto => auto.brand === 'Audi');
  //   });
  // }


}
