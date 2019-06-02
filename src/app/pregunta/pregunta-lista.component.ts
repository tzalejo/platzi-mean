import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';

const p = new Pregunta(
  'Como reutilizo un componente de angular',
  'Miren, esta es mi pregunta',
  new Date(),
  'none');
@Component({
  selector: 'app-pregunta-lista',
  templateUrl: './pregunta-lista.component.html',
  styles:[`
    i{
      font-size: 48px;
    }
    i.help{
      width: 40px !important;
      height: 40px !important;
      padding: 0 !important;
      font-size: 40px !important;
    }
    .agregar-pregunta {
      position: fixed;
      bottom:30px;
      right:30px;
      font-size:30px;
    }
  `]
})
export class PreguntaListaComponent implements OnInit {
  preguntas: Pregunta[] = new Array(5).fill(p);
  ngOnInit(): void { }
}
