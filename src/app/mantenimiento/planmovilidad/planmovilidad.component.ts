import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planmovilidad',
  templateUrl: './planmovilidad.component.html',
  styleUrls: ['./planmovilidad.component.scss']
})
export class PlanmovilidadComponent implements OnInit {
  pmovilidad: any;
  constructor(private router: Router,public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getPMovilidad();
  }

  getPMovilidad() {
    this.pmovilidad = [];
    this.rest.getPMovilidad().subscribe((data: {}) => {
      console.log(data);
      this.pmovilidad = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/planmovilidad/planmov-add'])
}

checkEditar() {
  this.router.navigate(['mantenimiento/planmovilidad/planmov-edit'])
}
}
