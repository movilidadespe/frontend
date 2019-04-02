import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RequisitosService} from 'app/service/requisitos.service';
declare var $:any;
@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
})

export class EstanciaComponent implements OnInit {
  products: any;

  constructor(private router: Router, private RequisitosService:RequisitosService) { }

  ngOnInit() {
    this.getrequisito();
  }


  getrequisito() {
    //console.log('entre')
    this.RequisitosService.getrequisito().subscribe(data=>{
      if(data){
      console.log('requisito,data')
    this.products=data;}});
    
}
checkLogin(){
  this.router.navigate(['maps'])
 
}
}
