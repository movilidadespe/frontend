import { Component, OnInit } from '@angular/core';
import { Convenio } from 'app/convenio';
import { ConvenioService } from 'app/service/convenio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convenio-add',
  templateUrl: './convenio-add.component.html',
  styleUrls: ['./convenio-add.component.scss']
})
export class ConvenioAddComponent implements OnInit {
  convenio: Convenio = new Convenio();
  contacto: FormGroup;
  submitted = false;

  constructor(private convenioService: ConvenioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        descripcion: ['', Validators.required],         
        fecha_inicio: ['', Validators.required],
        fecha_fin: ['', Validators.required],
        estado: ['', Validators.required],
        code: ['', Validators.required],
    });
}

get f() { return this.contacto.controls; }

  nuevo(): void {
    this.submitted = false;
    this.convenio = new Convenio();
  }

   save(){
     this.convenioService.create(this.convenio)
     .subscribe(data => console.log(data), error => console.log(error));
     this.convenio = new Convenio();
   }
   onSubmit() {
    this.submitted = true;
    this.save();
  }
   checkVolver(){
    this.router.navigate(['mantenimiento/convenio'])
  }
}
