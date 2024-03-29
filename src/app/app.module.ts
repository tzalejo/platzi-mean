import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

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
import { PreguntaScreenComponent } from './pregunta/pregunta-screen.component';

import {RoutingModule} from './app.routing'
import { AuthService } from './auth/auth.services';
@NgModule({
  declarations: [
    AppComponent,
    PreguntaDetalleComponent,
    RespuestaFormComponent,
    SigninScreemComponent,
    SignUpScreemComponent,
    PreguntaListaComponent,
    PreguntaFormComponent,
    PreguntaScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // son los modulos de material, lo importamos como dice la documentacion
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,HttpClientModule,HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
