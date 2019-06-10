import { Component } from '@angular/core';
import { AuthService } from './auth/auth.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthService ){}
  
  estaLogueado(){
    return this.authService.estaLogueado();
  }

  fullNombres(){
    return this.authService.clienteActual.fullNombres();
  }

  logout(){
    this.authService.logout();
  }

}
