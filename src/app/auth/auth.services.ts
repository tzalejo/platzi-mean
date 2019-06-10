import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from '../../environments/environment'
import { Usuario } from './Usuario.model';
import { Headers,Http,Response  } from '@angular/http'

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  usuarioUrl : string;
  clienteActual?: Usuario;

  constructor(private http : Http,private router : Router){
    this.usuarioUrl=urljoin(environment.apiUrl,'auth');
    if (this.estaLogueado()){
      const {usuarioId,email,nombre,apellido} = JSON.parse(localStorage.getItem('usuario'));
      this.clienteActual = new Usuario(email,null, nombre,apellido,usuarioId);
    }

  }

  // crear un usuario
  signup(usuario: Usuario){
    
    const body= JSON.stringify(usuario); 
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post(urljoin(this.usuarioUrl,'signup'),body,{headers})
      .pipe(
        map((response: Response)=>{
          const json = response.json();
          this.login(json);
          return json;
        })
      );
  }
  signin(usuario: Usuario){
    // convierte un objeto o valor de JavaScript en una cadena de texto JSON
    // JSON.stringify({ x: 5, y: 6 }) expected output: "{"x":5,"y":6}"
    const body= JSON.stringify(usuario); 
    const headers = new Headers({'Content-type': 'application/json'});

    //
    return this.http.post(urljoin(this.usuarioUrl,'signin'),body,{headers})
      .pipe(
        map((response: Response)=>{
          const json = response.json();
          this.login(json);
          return json;
        }) 
      );
  }
  login  = ({token,usuarioId,nombre, apellido, email})=>{
    this.clienteActual = new Usuario(email,null,nombre,apellido,usuarioId);
    // localStorage: para mantener la session del usuario, es un espacio d memoria del navegador destinado para guardar
    // localStorage es similar a sessionStorage. La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de 
    // expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.
    localStorage.setItem('token',token);
    // guardamos el usuario
    localStorage.setItem('usuario',JSON.stringify({usuarioId,nombre, apellido,email}));
    // lo redirecciono al home
    this.router.navigateByUrl('/');

  }
  estaLogueado(){
    return localStorage.getItem('token') !== null;
  }
  
  // cerrar sesion del usuario
  logout(){
    localStorage.clear();
    this.clienteActual= null;
    this.router.navigateByUrl('/');
  }

  handleError(err: any){
    const errMsg = err.message ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : `Server error`;
    console.log(errMsg);
  }
}