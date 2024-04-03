import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form!:FormGroup;

  constructor(private fb: FormBuilder){}


  ngOnInit(){

    this.form = this.fb.group({
      nome: this.fb.control(null,[Validators.required]),
      cognome: this.fb.control(null),
      authData: this.fb.group({
        email: this.fb.control(null,[Validators.required]),
        password: this.fb.control(null)
      })
    })

  }

  isValid(fieldName:string):boolean{
    const field = this.form.get(fieldName)

    if(!field) return false

    return field.valid
  }

  isTouched(fieldName:string):boolean{
    const field = this.form.get(fieldName)

    if(!field) return false

    return field.touched
  }


}
