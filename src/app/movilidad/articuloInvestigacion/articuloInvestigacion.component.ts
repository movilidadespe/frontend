import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articuloInvestigacion',
  templateUrl: './articuloInvestigacion.component.html',
  styleUrls: ['./articuloInvestigacion.component.scss']
})
export class ArticuloInvestigacionComponent implements OnInit {
  mensaje: string = 'este es mi hijo';

  constructor() { }

  ngOnInit() {
  
  }
  saludo(value){
    this.mensaje = value;
  }

}
