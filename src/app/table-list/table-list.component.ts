import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  typesOfShoes: string[] = [
    'Ser investigador o profesor titular escalafonado.',
    'No haber sido beneficiado en el plan de movilidad del año anterior.',
    'Acreditar una permanencia ininterrumpida mínima de 3 años en la Universidad.',
    'No haber sido sancionado durante los últimos 3 años,por el cometimiento de una falta grave o muy grave.',
    ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  checkLogin(){
      this.router.navigate(['maps'])
     
  }
}
