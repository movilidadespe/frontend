import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipomovilidad',
  templateUrl: './tipomovilidad.component.html',
  styleUrls: ['./tipomovilidad.component.scss']
})
export class TipomovilidadComponent implements OnInit {
  tmovilidad: any;
  tipomov: any = [];

  constructor(private router: Router,public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getTMovilidad();
    this.getTipomov();
  }
  getTMovilidad() {
    this.tmovilidad = [];
    this.rest.getTMovilidad().subscribe((data: {}) => {
      console.log(data);
      this.tmovilidad = data;
    });
  }
  getTipomov() {
    this.tipomov = [];
    this.rest.getTMovilidad().subscribe((data: {}) => {
      console.log(data);
      this.tipomov = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/tipomovilidad/tipomovilidad-add'])
}

checkEditar() {
  this.router.navigate(['mantenimiento/tipomovilidad/tipomovilidad-edit'])
}
}
