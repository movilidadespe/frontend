import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movsubm',
  templateUrl: './movsubm.component.html',
  styleUrls: ['./movsubm.component.scss']
})
export class MovsubmComponent implements OnInit {
movsubm: any = [];

  constructor(private router: Router, public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getMovsubm();
  }
  getMovsubm(){
    this.movsubm = [];
    this.rest.getMovsubm().subscribe((data: {}) => {
      console.log(data);
      this.movsubm = data;
    });
  }
  checkCrear() {
    this.router.navigate(['mantenimiento/movsubm/movsubm-add'])
}
checkEditar() {
  this.router.navigate(['mantenimiento/movsubm/movsubm-edit'])
}
}
