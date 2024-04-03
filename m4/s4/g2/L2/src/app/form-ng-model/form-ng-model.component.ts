import { Component } from '@angular/core';

@Component({
    selector: 'app-form-ng-model',
    templateUrl: './form-ng-model.component.html',
    styleUrl: './form-ng-model.component.scss'
})

export class FormNgModelComponent {

    loginData:{nome:string,password:string,email:string} = {
      nome : 'Giovanni',
      password :  '',
      email: ''
  }


  formType = 'password'

  showHide():void{
    if(this.formType == 'text'){
      this.formType = 'password'
    }else{
      this.formType = 'text'
    }
  }

  getButtonText():string{
    return this.formType == 'text' ? 'Hide' : 'show'
  }

}
