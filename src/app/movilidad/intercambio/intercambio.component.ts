import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisitosService } from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
declare var $: any;

@Component({
  selector: 'app-intercambio',
  templateUrl: './intercambio.component.html',
  styleUrls: ['./intercambio.component.scss']
})
export class IntercambioComponent implements OnInit {
  requisito: any;
  id: any;
  products: any = [];

  constructor(private router: Router, private requisitosService: RequisitosService, public rest: ConsumirService) { }

  ngOnInit() {
    this.getrequisito();
  }
  getProducts(id: number) {
    this.products = [];
    this.rest.getProducts(id).subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products);

    });
  }


  getrequisito() {
    // console.log('entre')
    this.requisitosService.getrequisito().subscribe(data => {
      if (data) {
        console.log('requisito,data')
        this.requisito = data;
      }
    });


  }

}
