import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.scss']
})
export class ConvoComponent implements OnInit {
  convo: any = [];

  constructor(private router: Router, public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getConvocatoria();
  }

  getConvocatoria() {
    this.convo = [];
    this.rest.getConvocatoria().subscribe((data: {}) => {
      console.log(data);
      this.convo = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/convo/convo-add'])
}

checkEditar() {
  this.router.navigate(['mantenimiento/convo/convo-edit'])
}
}
