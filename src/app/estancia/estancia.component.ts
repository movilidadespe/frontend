import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RequisitosService} from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
declare var $:any;
@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
})

export class EstanciaComponent implements OnInit {
  requisito: any;
   products: any = [];


  constructor(private router: Router, private RequisitosService:RequisitosService, public rest: ConsumirService) { }

  ngOnInit() {
    this.getrequisito();
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products);
       
    });}

  getrequisito() {
    //console.log('entre')
    this.RequisitosService.getrequisito().subscribe(data=>{
      if(data){
      console.log('requisito,data')
    this.requisito=data;}});

    
}
checkLogin(){
  this.router.navigate(['maps'])
 
}
}
