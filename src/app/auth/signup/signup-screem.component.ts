import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from '../Usuario.model';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup-screem',
  templateUrl: './signup-screem.component.html'
})
export class SignUpScreemComponent implements OnInit {
  signUpForm : FormGroup;
  constructor(fb: FormBuilder) {}

  ngOnInit(){
    this.signUpForm = fb.group({
      nombre: new FormControl(null,[
        Validators.required,
        Validators.minLength(4)
      ]),
      apellido: new FormControl(null,[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(5)
      ])
    },{
      validator: SignUpScreemComponent.MatchPassword() 
    });
  }
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmar_password = AC.get('confirmar_password').value; // to get value in input tag
     if(password != confirmar_password) {
         console.log('false');
         AC.get('confirmar_password').setErrors( {MatchPassword: true} )
     } else {
         console.log('true');
         return null
     }
 }

  onSubmit(){
    if(this.signUpForm.valid){
      const {nombre,apellido,email,password} = this.signUpForm.value;
      const usuario = new Usuario(email,password,nombre,apellido,);
      console.log(usuario);
    }
  }
  
}
