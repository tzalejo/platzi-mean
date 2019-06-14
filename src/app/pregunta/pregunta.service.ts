import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { map} from 'rxjs/operators';
import { Respuesta } from  '../respuesta/respuesta.model';


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
    
    // configuramo para que el servidor reciba un objeto en formato json..
    const headers = new Headers({ 'Content-type': 'application/json' });

    const token = this.obtenerToken();
    return this.http.post(this.preguntasUrl+token,body,{headers})
      .pipe(
        map((response: Response)=>response.json())
      )
  }
  addRespuesta(respuesta: Respuesta){

    // para no enviar todo el objeto de respuesta, solo seleccionamos cierta info
    const a ={
      descripcion: respuesta.descripcion,
      pregunta: {
        _id: respuesta.pregunta._id
      }
    }

    // generar un string a partir de un modelo, respuesta. Modificamos para q solo envie lo q esta arriba y no toda la info
    const body = JSON.stringify(a);
    
    // api/preguntas/:id/respuestas
    const url = urljoin(this.preguntasUrl,respuesta.pregunta._id.toString(),'respuestas'); //this.preguntasUrl +'/'+respuesta.pregunta._id+'/respuestas'; 
  
    // configuramo para que el servidor reciba un objeto en formato json..
    const headers = new Headers({ 'Content-type': 'application/json' });
    
    const token = this.obtenerToken();
    return this.http.post(url+token,body,{headers})
      .pipe(
        map((response: Response)=>response.json())
      )
  }
  handleError(error: any ) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'; 
    console.log('Error  pregunta.services',errMsg);
  }
  obtenerToken(){
    // es el token generado al loguearse un usuario
    const token = localStorage.getItem('token');
    // devolvemos 
    return `?token=${token}` ;
  }
}