import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-planmovilidad',
  templateUrl: './planmovilidad.component.html',
  styleUrls: ['./planmovilidad.component.scss']
})
export class PlanmovilidadComponent implements OnInit {
  pmovilidad: any;
  constructor(public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getPMovilidad();
  }

  getPMovilidad(){
    this.pmovilidad = [];
    this.rest.getPMovilidad().subscribe((data: {}) => {
      console.log(data);
      this.pmovilidad = data;
    });
  }
}
