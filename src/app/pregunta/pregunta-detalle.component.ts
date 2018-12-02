import { Component, OnInit } from '@angular/core';
import { Pregunta} from './pregunta.module';
@Component({
  selector: 'app-pregunta-detalle',
  templateUrl: './pregunta-detalle.component.html',
  styleUrls: ['./pregunta-detalle.component.css']
})

export class PreguntaDetalleComponent {
  pregunta: Pregunta = new Pregunta(
    'Esta es una nueva pregutna de Express',
    'Miren tengo una pregunta sobre express necesito',
    new Date,
    'devicon-angularjs-plain'
  );
  

}