import { PreguntaDetalleComponent } from './pregunta-detalle.component'
// import { PreguntaListaComponent } from './pregunta-lista.component';
import { PreguntaFormComponent } from './pregunta-form.component';
import { PreguntaScreenComponent } from './pregunta-screen.component';

export const PREGUNTA_ROUTES = [
  // {path : '', component: PreguntaListaComponent},
  {path : '', component: PreguntaScreenComponent},
  {path: 'nueva',component: PreguntaFormComponent },
  {path : ':id', component: PreguntaDetalleComponent}
];

