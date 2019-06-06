import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { PreguntaService } from './pregunta.service';

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
    .loading-spinner{
      position:fixed
    }
  `],
  providers:[PreguntaService]
})
export class PreguntaListaComponent implements OnInit {
  private loading : boolean;
  private preguntas: Pregunta[];
  constructor(private preguntaServicio: PreguntaService){
    this.preguntas=[];
    this.loading = true; //tipo bandera para indicar si estamos cargando los datos del backend
  }
  // cuando se monte este componente en pantalla, vamos a pedir las preguntas
  ngOnInit(){
    this.preguntaServicio.getPreguntas()
      .subscribe((preguntas: Pregunta[])=>{
        this.preguntas = preguntas;
        this.loading=false;
      },this.preguntaServicio.handleError);

  }
}
