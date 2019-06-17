import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';
// import { PreguntaListaComponent } from './pregunta/pregunta-lista.component';
import { SigninScreemComponent } from './auth/signin/signin-screen.component';
import { PreguntaScreenComponent } from './pregunta/pregunta-screen.component';
import { SignUpScreemComponent } from './auth/signup/signup-screem.component';

import {PREGUNTA_ROUTES} from './pregunta/pregunta.routing';
const ROUTES: Routes = [
  { path: '', component: PreguntaScreenComponent, pathMatch: 'full' },
  { path: 'signup', component: SignUpScreemComponent },
  { path: 'signin', component: SigninScreemComponent },
  { path: 'preguntas', children: PREGUNTA_ROUTES },
  
  // pregunta -> preguntalista
  //pregutna/id -> pregntaDetalle
  //pregutna/nueva -> pantalla de creacion de pregunta..
  
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const RoutingModule  = RouterModule.forRoot(ROUTES);
