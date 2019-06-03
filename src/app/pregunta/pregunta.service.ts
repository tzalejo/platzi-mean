import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { Http} from '@angular/http';
import { environment} from '../../environments/environment';
import urljoin from 'url-join';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// ES6 Modules or TypeScript, para mostrar cartel de errores.
import * as Rx from 'rxjs';
@Injectable()
export class PreguntaService {
  private preguntasUrl: string;
  constructor(private http:Http){
    this.preguntasUrl = urljoin(environment.apiUrl,'preguntas');
   }
  // el retorno de getPregunta: 
  // el retorno es una promesa que puede ser void(si es un error) o una array de pregunta
  getPreguntas() {
    // el pedido http hacia el backend..con la direccion q esta en environment
    return this.http.get(this.preguntasUrl)
            .pipe(
              map(respuestas => {
                return respuestas.json() as Pregunta[];
              })
            )
  }

  getPregunta(id){
    const url = urljoin(environment.apiUrl,id);
    return this.http.get(url)
          .pipe(
            map(respuesta => {
              return respuesta.json() as Pregunta;
            })
          );
  }
  handleError(err: any){
    const errMsg = err.message ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : `Server error`;
    console.log(errMsg);
  }
}