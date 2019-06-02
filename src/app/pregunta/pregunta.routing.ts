import { PreguntaDetalleComponent } from './pregunta-detalle.component'
import { PreguntaListaComponent } from './pregunta-lista.component';
import { PreguntaFormComponent } from './pregunta-form.component';

export const PREGUNTA_ROUTES = [
  {path : '', component: PreguntaListaComponent},
  {path: 'nueva',component: PreguntaFormComponent },
  {path : ':id', component: PreguntaDetalleComponent}
];

