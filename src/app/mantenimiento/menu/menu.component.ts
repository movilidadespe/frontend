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

}
