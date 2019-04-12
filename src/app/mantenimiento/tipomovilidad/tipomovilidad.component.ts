import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-tipomovilidad',
  templateUrl: './tipomovilidad.component.html',
  styleUrls: ['./tipomovilidad.component.scss']
})
export class TipomovilidadComponent implements OnInit {
  tmovilidad: any;
  constructor(public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getTMovilidad();
  }
  getTMovilidad(){
    this.tmovilidad = [];
    this.rest.getTMovilidad().subscribe((data: {}) => {
      console.log(data);
      this.tmovilidad = data;
    });
  }
}
