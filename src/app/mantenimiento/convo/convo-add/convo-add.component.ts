import { Component, OnInit } from '@angular/core';
import { Convoca } from 'app/convocatoria';
import { CrearService } from 'app/service/crear.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convo-add',
  templateUrl: './convo-add.component.html',
  styleUrls: ['./convo-add.component.scss']
})
export class ConvoAddComponent implements OnInit {

  
  convocatoria: Convoca= new Convoca();
  contacto: FormGroup;
  submitted = false;

  constructor(private router: Router, private CrearService: CrearService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        descripcion: ['', Validators.required],         
        fecha_inicio: ['', Validators.required],
        fecha_fin: ['', Validators.required],
        estado: ['', Validators.required],
    });
}

get f() { return this.contacto.controls;}

  nuevo(): void {
    this.submitted = false; 
    this.convocatoria = new Convoca();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  
}


  save() {
    this.CrearService.create(this.convocatoria)
      .subscribe(data => console.log(data), error => console.log(error));
      
    this.convocatoria = new Convoca();
    
   }
   validar() {

    if (onsubmit) {
   this.submitted = false;
    }
    return this.router.navigate(['mantenimiento/convo']);
  }

   checkVolver(){
    this.router.navigate(['mantenimiento/convo'])
  }
}