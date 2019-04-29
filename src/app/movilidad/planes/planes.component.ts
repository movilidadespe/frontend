import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumirMovilidadService } from 'app/service/consumir-movilidad.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  plan: any = [];
  planmovi: any = [];
  planindex: any = [];
  requisito: any = [];
  constructor(private router: Router, public rest: ConsumirMovilidadService) { }

  ngOnInit() {
    this.getPlan();
    this.getPlanMovi();
    this.getindexadas();
  }

  getPlan() {
    this.plan = [];
    this.rest.getPlan().subscribe((data: {}) => {
      console.log(data);
      this.plan = data;
    });
  }

//  requisitoestancia() {
  //  this.router.navigate(['movilidad/estancia']);
    //this.rest.requisitoestancia().subscribe(data => {
     // if (data) {
       // console.log('requisito,data')

        //this.requisito = data;
        
     // }
    //});
 // }


  getPlanMovi() {
    this.planmovi = [];
    this.rest.getPlanMovi().subscribe((data: {}) => {
      console.log(data);
      this.planmovi = data;
    });
  }

  getindexadas() {
    this.planindex = [];
    this.rest.getindexadas().subscribe((data: {}) => {
      console.log(data);
      this.planindex = data;
    });
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
