import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pregunta-screen',
  templateUrl: './pregunta-screen.component.html',
  styles: [`
  .agregar-pregunta {
    position: fixed;
    bottom:30px;
    right:30px;
    font-size:30px;
  }
  `]
})
export class PreguntaScreenComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
