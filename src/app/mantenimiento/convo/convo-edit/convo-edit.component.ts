import { Component, OnInit } from '@angular/core';
import { Convoca } from 'app/convocatoria';
import { CrearService } from 'app/service/crear.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convo-edit',
  templateUrl: './convo-edit.component.html',
  styleUrls: ['./convo-edit.component.scss']
})
export class ConvoEditComponent implements OnInit {

  
  convocatoria: Convoca= new Convoca();
  contacto: FormGroup;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute ,private router: Router, private CrearService: CrearService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        descripcion: ['', Validators.required],         
        fecha_inicio: ['', Validators.required],
        fecha_fin: ['', Validators.required],
        estado: ['', Validators.required],
    });
}

get f() { return this.contacto.controls; }

  nuevo(): void {
    this.submitted = false;
    
    this.convocatoria = new Convoca();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  
}


  save() {
    this.convocatoria.id = this.activatedRoute.snapshot.paramMap.get("convo_id");
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