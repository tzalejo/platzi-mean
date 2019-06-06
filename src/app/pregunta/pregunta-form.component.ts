import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pregunta } from './pregunta.model';
import icons from './icons';
import {PreguntaService} from './pregunta.service';

// para navegar
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-pregunta-form',
  templateUrl: './pregunta-form.component.html',
  styles: [`
  mat-icon{
    font-size: 48px;
  }
  small {
    display:block;
  }
  `],
  providers:[PreguntaService]
})
export class PreguntaFormComponent {
  icons: Object[] = icons; // mi array de icons para luego manejar en html
  constructor(
    private preguntaService : PreguntaService,
    private router: Router
    ){

  }

  onSubmit(form : NgForm){
    // console.log(form);
    const preg = new Pregunta(
      form.value.titulo,
      form.value.descripcion,
      new Date(),
      form.value.icon
    );
    // agregamo un pregunta..
    this.preguntaService.addPregunta(preg)
        .subscribe(
          ({_id})=>{
            console.log(_id);
            // vamos a navegar a la ruta /preguntas y como paramentro _id
            this.router.navigate(['/preguntas',_id]);
          },
          (error)=>{console.log(error)}
        )
  }
  getVersionIcon(icon: any){

    let version ;
    if (icon.versions.font.includes('play-wordmark')) {
      version = 'play-wordmark';
    }else{
      version = icon.versions.font[0];
    }
    return version;
  }
  
}
