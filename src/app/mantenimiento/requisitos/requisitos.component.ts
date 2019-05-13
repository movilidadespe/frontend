import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.scss']
})
export class RequisitosComponent implements OnInit {
  requisitos: any = [];
  requisito: any = [];

  constructor(private router: Router,public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getRequisitos();
    this.getRequisito();
  }
  getRequisitos() {
    this.requisitos = [];
    this.rest.getRequisitos().subscribe((data: {}) => {
      console.log(data);
      this.requisitos = data;
    });
  }
  getRequisito() {
    this.requisito = [];
    this.rest.getRequisitos().subscribe((data: {}) => {
      console.log(data);
      this.requisito = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/requisitos/requisitos-add'])
}


}
