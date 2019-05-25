import { Component } from '@angular/core';
import { Pregunta } from './pregunta.model';
@Component({
  selector: 'app-pregunta-detalle',
  templateUrl: './pregunta-detalle.component.html',
  styleUrls: ['./pregunta-detalle.component.css']
})

export class PreguntaDetalleComponent {
  pregunta: Pregunta = new Pregunta(
    'Titulo: Esta es una nueva pregunta sobre Express',
    'Descripcion: Miren tengo una duda de express necesito..',
    new Date,
    'devicon-angularjs-plain'
  );
  

}