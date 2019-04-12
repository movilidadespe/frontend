import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

checkEstancia(){
    this.router.navigate(['movilidad/estancia']) 
}
checkIndexada(){
  this.router.navigate(['movilidad/indexada']) 
}
checkIntercambio(){
  this.router.navigate(['movilidad/intercambio'])
}
checkArticulos(){
  this.router.navigate(['movilidad/articulos'])
}
checkGestion(){
  this.router.navigate(['movilidad/gestion'])
}
checkExternos(){
  this.router.navigate(['movilidad/externos'])
}
}
