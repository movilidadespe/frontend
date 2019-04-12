import { OnInit, Component } from "@angular/core";
import { ConsumirMantenimientoService } from "app/service/consumir-mantenimiento.service";


@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss']
})
export class ConvocatoriaComponent implements OnInit {
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
