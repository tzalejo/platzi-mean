import { Component,OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { PreguntaService } from './pregunta.service'
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pregunta-detalle',
  templateUrl: './pregunta-detalle.component.html',
  styleUrls: ['./pregunta-detalle.component.css'],
  providers:[PreguntaService]
})

export class PreguntaDetalleComponent implements OnInit{
  pregunta?: Pregunta;
  loading = true;
  id= null;
  constructor(
    private preguntaService: PreguntaService,
    private router: ActivatedRoute //para obtener los parametro de url
  ){

  }
  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    this.preguntaService.getPregunta(this.id)
      .subscribe(
        (pregunta: Pregunta) => {
        console.log(pregunta);
        this.pregunta=pregunta;
        
        this.loading= false;
      });
  }
}