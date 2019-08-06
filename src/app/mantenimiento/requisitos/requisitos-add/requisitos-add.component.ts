import { Component, OnInit } from '@angular/core';
import { Requisito } from 'app/requisito';
import { RequisitoService } from 'app/service/requisito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisitos-add',
  templateUrl: './requisitos-add.component.html',
  styleUrls: ['./requisitos-add.component.scss']
})
export class RequisitosAddComponent implements OnInit {
  requisito:  Requisito = new Requisito();
  contacto: FormGroup;
  submitted = false;

  constructor(private requisitoService: RequisitoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        nombre: ['', Validators.required],         
        detalle: ['', Validators.required],
        estado: ['', Validators.required],
    });
}

get f() { return this.contacto.controls; }

  nuevo(): void {
    this.submitted = false;
    this.requisito = new Requisito();
  }


  save() {
    this.requisitoService.create(this.requisito)
      .subscribe(data => console.log(data), error => console.log(error));
    this.requisito = new Requisito();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  checkVolver(){
    this.router.navigate(['mantenimiento/requisitos'])
  }

}
