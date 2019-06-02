import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { Http} from '@angular/http';
import { environment} from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise'; // el modulo para toPromise
@Injectable()
export class PreguntaService {
  private preguntasUrl: string;
  constructor(private http:Http){
    this.preguntasUrl = urljoin(environment.apiUrl,'pregunta');
   }
  // el retorno de getPregunta: 
  // el retorno es una promesa que puede ser void(si es un error) o una array de pregunta
  getPregunta():Promise <void | Pregunta[]> {
    // el pedido http hacia el baken..con la direccion q esta en environment
    return this.http.get(this.preguntasUrl)
            .toPromise()
            .then(response => response.json() as Pregunta[])// en caso exito
            .catch(this.handleError); // en caso de error
  }
  handleError(){

  }
}