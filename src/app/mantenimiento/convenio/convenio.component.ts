import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss']
})
export class ConvenioComponent implements OnInit {
  convenio: any;
  constructor(public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
    this.getConvenio();
  }

  getConvenio(){
    this.convenio = [];
    this.rest.getConvenio().subscribe((data: {}) => {
      console.log(data);
      this.convenio = data;
    });
  }
}
