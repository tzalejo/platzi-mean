import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pregunta } from './pregunta.model';
import icons from './icons';
import {PreguntaService} from './pregunta.service';

// para navegar
import {Router} from '@angular/router'; 
import { AuthService } from '../auth/auth.services';
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
export class PreguntaFormComponent implements OnInit{
  icons: Object[] = icons; // mi array de icons para luego manejar en html
  constructor(
    private authService : AuthService,
    private preguntaService : PreguntaService,
    private router: Router
    ){

  }

  ngOnInit(){
    // verifico que este logueado el usuario para ver las respuesta a una pregunta..
    if (!this.authService.estaLogueado()){
      console.log('no esta logueado- pregunta-from');
      this.router.navigateByUrl('/signin');
    }
  }

  onSubmit(form : NgForm){
    // console.log(form);
    const preg = new Pregunta(
      form.value.titulo,
      form.value.descripcion,
      new Date(),
      form.value.icon
    );
    console.log(preg);
    // agregamo un pregunta..
    this.preguntaService.addPregunta(preg)
        .subscribe(
          ({_id})=>{
            // vamos a navegar a la ruta /preguntas y como paramentro _id
            this.router.navigate(['/preguntas',_id]);
          },
          this.authService.handleError
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
