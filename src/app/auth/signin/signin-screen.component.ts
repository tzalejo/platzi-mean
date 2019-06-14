import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../Usuario.model';

import {AuthService} from '../auth.services';
@Component({
  selector: 'app-signin-screem',
  templateUrl: './signin-screem.component.html'
})
export class SigninScreemComponent implements OnInit {
  signinForm : FormGroup; // variable de formulario de si mismo..
  
  constructor(private authService : AuthService){}

  ngOnInit(){ 
    // validaciones
    this.signinForm = new FormGroup({
      
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new  FormControl(null,[
        Validators.required
      ])
    });
  }
  onSubmit(){
    if(this.signinForm.valid){
      const {email, password} = this.signinForm.value;
      const usuario = new Usuario(email,password);
      // console.log(usuario); 
      this.authService.signin(usuario)
        .subscribe(
          this.authService.login,
          this.authService.handleError
          // err => console.log(err)
        );
    }
  }
}
