import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Respuesta} from './respuesta.model';
import { Pregunta } from '../pregunta/pregunta.model';
// import { Usuario } from '../auth/Usuario.model';

import { PreguntaService } from '../pregunta/pregunta.service';

// para hace una navegacion con sroll
import * as SmoothScroll from 'smooth-scroll';


@Component({
  selector:'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',
  styleUrls:['./respuesta-form.component.css'],
  providers:[PreguntaService]
})
export class RespuestaFormComponent {
  // ngForm un formulario de typescript
  @Input() pregunta: Pregunta; // viene del pregutna.component como parametro.
  smoothScroll: SmoothScroll;
  
  // inyecto los servicios
  constructor(private preguntaServicio: PreguntaService){
    // inicializamos sweet
      this.smoothScroll= new SmoothScroll();
  }
  onSubmit(form: NgForm){
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
        },// this.pregunta.respuesta.push(respuesta); inserta al final de la lista.. 
          this.preguntaServicio.handleError
      );
    // inserta la respuesta al principio de la lista
    form.reset(); // borramos el formaulario de la respuesta..
  }

}
