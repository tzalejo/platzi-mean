import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// material angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import 'hammerjs';

import { PreguntaDetalleComponent} from './pregunta/pregunta-detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    PreguntaDetalleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule // son los modulos de material, lo importamos como dice la documentacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
