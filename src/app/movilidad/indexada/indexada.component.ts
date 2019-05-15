import { Component, OnInit } from "@angular/core";
import { ConsumirService } from "app/service/consumir.service";


@Component({
  selector: 'app-indexada',
  templateUrl: './indexada.component.html',
  styleUrls: ['./indexada.component.scss']
})
export class IndexadaComponent implements OnInit {

  products: any = [];

  constructor(public rest: ConsumirService) { }

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
