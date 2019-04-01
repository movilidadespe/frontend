import { Component, OnInit } from '@angular/core';
import { ConsumirService } from 'app/service/consumir.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  products: any = [];
  constructor(public rest: ConsumirService) { }



  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products); 
    });
  }
}
