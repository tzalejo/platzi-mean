import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

// material angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import 'hammerjs';
import { MomentModule } from 'angular2-moment'; // trabaja con pipe
// componentes
import { RespuestaFormComponent }   from './respuesta/respuesta-form.component';
import { SigninScreemComponent }    from './auth/signin/signin-screen.component';
import { SignUpScreemComponent }    from './auth/signup/signup-screem.component';
import { PreguntaDetalleComponent } from './pregunta/pregunta-detalle.component';
import { PreguntaListaComponent }   from './pregunta/pregunta-lista.component';
import { PreguntaFormComponent }    from './pregunta/pregunta-form.component';
import {RoutingModule} from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    PreguntaDetalleComponent,
    RespuestaFormComponent,
    SigninScreemComponent,
    SignUpScreemComponent,
    PreguntaListaComponent,
    PreguntaFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // son los modulos de material, lo importamos como dice la documentacion
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
