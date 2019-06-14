import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta} from './respuesta.model';
import { Pregunta } from '../pregunta/pregunta.model';
// import { Usuario } from '../auth/Usuario.model';

import { PreguntaService } from '../pregunta/pregunta.service';

// para hace una navegacion con sroll
import * as SmoothScroll from 'smooth-scroll';

import { AuthService } from '../auth/auth.services';

@Component({
  selector:'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',
  styleUrls:['./respuesta-form.component.css'],
  providers:[PreguntaService]
})
export class RespuestaFormComponent implements OnInit{
  // ngForm un formulario de typescript
  @Input() pregunta: Pregunta; // viene del pregutna.component como parametro.
  smoothScroll: SmoothScroll;
  
  // inyecto los servicios
  constructor(
    private authService:  AuthService,
    private preguntaServicio: PreguntaService,
    private router : Router
    ){
    // inicializamos sweet
      this.smoothScroll= new SmoothScroll();
  }

  ngOnInit(){

  }
  onSubmit(form: NgForm){
    // verifico si esta logueado..
    if (!this.authService.estaLogueado()){
      console.log('no esta logueado');
      this.router.navigateByUrl('/signin');
    }

    const respuesta = new Respuesta(
      form.value.descripcion,
      this.pregunta
    );

    this.preguntaServicio
      .addRespuesta(respuesta)
      .subscribe(
        resp=> {
          this.pregunta.respuestas.unshift(resp);
          // para navegar con el scroll..al insertar un respuesta a una pregutna...me redireje hacia dnd esta 
          // id= titulo-respuestas 
          const anchor = document.querySelector('#titulo-respuestas');
          this.smoothScroll.animateScroll(anchor);
          // this.pregunta.respuesta.push(respuesta); inserta al final de la lista.. 
        },
        this.authService.handleError);
    // inserta la respuesta al principio de la lista
    form.reset(); // borramos el formaulario de la respuesta..
  }

}
