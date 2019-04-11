import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticuloInvestigacionComponent} from '../movilidad/articuloInvestigacion/articuloInvestigacion.component';
@Component({
  selector: 'app-movilidad',
  templateUrl: './movilidad.component.html',
  styleUrls: ['./movilidad.component.scss']
})
export class MovilidadComponent implements OnInit {
  @ViewChild(ArticuloInvestigacionComponent) articulo : ArticuloInvestigacionComponent;

  constructor() { }

  ngOnInit() {
  }

  enviarMensaje(){
    this.articulo.saludo('hola desde el padre');
  }

}
