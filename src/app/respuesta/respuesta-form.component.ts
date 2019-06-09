import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Respuesta} from './respuesta.model';
import { Pregunta } from '../pregunta/pregunta.model';
// import { Usuario } from '../auth/Usuario.model';

import { PreguntaService } from '../pregunta/pregunta.service';

// para hace una navegacion con sroll
// import SweetScroll from 'sweet-scroll/decls';c
@Component({
  selector:'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',
  styleUrls:['./respuesta-form.component.css'],
  providers:[PreguntaService]
})
export class RespuestaFormComponent {
  @Input() pregunta: Pregunta; // viene del pregutna.component como parametro.
  // ngForm un formulario de typescript
  // sweetScroll : SweetScroll;
  
  // inyecto los servicios
  constructor(private preguntaServicio: PreguntaService){
    // inicializamos sweet
    // this.sweetScroll = new SweetScroll();
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
          // this.sweetScroll.to('#titulo');
        },// this.pregunta.respuesta.push(respuesta); inserta al final de la lista.. 
          this.preguntaServicio.handleError
      );
    // inserta la respuesta al principio de la lista
    form.reset(); // borramos el formaulario de la respuesta..
  }

}
