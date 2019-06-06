import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    const url = urljoin(this.preguntasUrl,id);
    // console.log('Url en el servicio',url)
    return this.http.get(url)
          .pipe(
            map(pregunta => {
              // console.log('En el SErvicio',pregunta)
              return pregunta.json() as Pregunta;
            })
          );
  }
  addPregunta(pregunta: Pregunta){
    // generar un string a partir de un modelo, pregunta.
    const body = JSON.stringify(pregunta);
    console.log(body);
    
    // configuramo para que el servidor reciba un objeto en formato json..
    const headers = new Headers({ 'Content-type': 'application/json' });

    return this.http.post(this.preguntasUrl,body,{headers})
            .pipe(
              map((response: Response)=>response.json()),
              catchError((error: Response)=>Observable.throw(error.json()))
            )
  }
  handleError(err: any){
    const errMsg = err.message ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : `Server error`;
    console.log(errMsg);
  }
}