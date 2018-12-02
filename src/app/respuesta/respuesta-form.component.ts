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
  onSubmit(form: NgForm){
    const respuesta = new Respuesta(
      form.value.descripcion,
      this.pregunta,
      new Date(),
      new Usuario('Pablo','Valenzuela')
    );
    // agregamos la respuesta al principio con unshift
    this.pregunta.respuesta.unshift(respuesta);
    form.reset();
  }
}
