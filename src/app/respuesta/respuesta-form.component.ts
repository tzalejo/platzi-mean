import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Respuesta} from './respuesta.model';
import { Pregunta } from '../pregunta/pregunta.model';
import { Usuario } from '../auth/Usuario.model';
@Component({
  selector:'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',
  styleUrls:['./respuesta-form.component.css']
})
export class RespuestaFormComponent {
  @Input() pregunta: Pregunta; // viene del pregutna.component como parametro.
  // ngForm un formulario de typescript
  onSubmit(form: NgForm){
    const respuesta = new Respuesta(
      form.value.descripcion,
      this.pregunta,
      new Date(),
      new Usuario(null,null,'Pablo','Valenzuela')
    );
    // this.pregunta.respuesta.push(respuesta); inserta al final de la lista..
    this.pregunta.respuesta.unshift(respuesta); // inserta la respuesta al principio  de la lista
    form.reset(); // borramos el formaulario de la respuesta..
  }
}
