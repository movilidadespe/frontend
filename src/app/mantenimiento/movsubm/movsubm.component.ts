import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-movsubm',
  templateUrl: './movsubm.component.html',
  styleUrls: ['./movsubm.component.scss']
})
export class MovsubmComponent implements OnInit {
movsubm: any;

  constructor(public rest: ConsumirMantenimientoService) { }

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
}
