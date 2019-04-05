import { Component, OnInit } from '@angular/core';
import { ConsumirService } from 'app/service/consumir.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-estancia-list',
  templateUrl: './estancia-list.component.html',
  styleUrls: ['./estancia-list.component.scss']
})
export class EstanciaListComponent implements OnInit {
  id: any;
  products: any = [];

  constructor(private router: Router, public rest: ConsumirService) { }

  ngOnInit() {
  }

  getProducts(id: number) {
    this.products = [];
    this.rest.getProducts(id).subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products);

    });
  }

}
