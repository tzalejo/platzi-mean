import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pregunta } from './pregunta.model';
import icons from './icons';
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
  `]
})
export class PreguntaFormComponent {
  icons: Object[] = icons; // mi array de icons para luego manejar en html
  onSubmit(form : NgForm){
    // console.log(form);
    const preg = new Pregunta(
      form.value.titulo,
      form.value.descripcion,
      new Date(),
      form.value.icon
    );
    console.log(preg);
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
