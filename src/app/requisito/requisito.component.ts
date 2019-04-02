import { Component, OnInit } from '@angular/core';
import { RequisitosService} from 'app/service/requisitos.service';
declare var $:any;

@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.scss']
})
export class RequisitoComponent implements OnInit {

  products: any;

  constructor(private RequisitosService:RequisitosService) { }

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
}
