import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
})
export class EstanciaComponent implements OnInit {
  requisitos: string[] = [
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
