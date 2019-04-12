import { Component, OnInit } from '@angular/core';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.scss']
})
export class ConvoComponent implements OnInit {
  convo: any = [];

  constructor(public rest: ConsumirMantenimientoService) { }

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

}
