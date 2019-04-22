import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.scss']
})
export class RequisitosComponent implements OnInit {
  requisitos: any= [];

  constructor(public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getRequisitos();
  }
  getRequisitos() {
    this.requisitos = [];
    this.rest.getRequisitos().subscribe((data: {}) => {
      console.log(data);
      this.requisitos = data;
    });
  }
}
