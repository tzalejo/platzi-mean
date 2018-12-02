import { Component} from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector:'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',
})
export class RespuestaFormComponent {
  onSubmit(form: NgForm){
    console.log(form.value.descripcion);
  }
}
