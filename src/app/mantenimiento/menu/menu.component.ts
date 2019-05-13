import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumirMantenimientoService } from 'app/service/consumir-mantenimiento.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  requisitos: any = [];
  constructor(private router: Router, public rest: ConsumirMantenimientoService) { }

  ngOnInit() {
  }
checkRequisitos(){
  this.router.navigate(['mantenimiento/requisitos']) 
}
checkPMovilidad(){
  this.router.navigate(['mantenimiento/planmovilidad'])
}
checkTMovilidad(){
  this.router.navigate(['mantenimiento/tipomovilidad'])
}
checkMovilidadSubM(){
  this.router.navigate(['mantenimiento/movsubm'])
}
checkConvenio(){
  this.router.navigate(['mantenimiento/convenio']) 
}
checkConvocatoria(){
  this.router.navigate(['mantenimiento/convo']) 
}
}
