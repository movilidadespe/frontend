import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss']
})
export class ConvenioComponent implements OnInit {
  convenio: any  = [];
  constructor(private router: Router, public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getConvenio();
  }

  getConvenio() {
    this.convenio = [];
    this.rest.getConvenio().subscribe((data: {}) => {
      console.log(data);
      this.convenio = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/convevio/convevio-add'])
}

checkEditar() {
  this.router.navigate(['mantenimiento/convevio/convevio-edit'])
}
}
