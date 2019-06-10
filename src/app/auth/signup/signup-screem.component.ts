import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../Usuario.model';

import { AuthService } from '../auth.services';
@Component({
  selector: 'app-signup-screem',
  templateUrl: './signup-screem.component.html'
})
export class SignUpScreemComponent implements OnInit {
  signUpForm:FormGroup;

  constructor(private authService: AuthService){}
  
  ngOnInit(){
    this.signUpForm  = new FormGroup({
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
      ]),
      confirmar_password: new FormControl(null,[
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSubmit(){
    const {nombre,apellido,email,password,confirmar_password} = this.signUpForm.value;
    if(this.signUpForm.valid && password === confirmar_password){
      const usuario = new Usuario(email,password,nombre,apellido,);
      console.log(usuario); 
      this.authService.signup(usuario)
        .subscribe(
          this.authService.login,
          error => console.log(error)
        )
    }
  }

  
}
