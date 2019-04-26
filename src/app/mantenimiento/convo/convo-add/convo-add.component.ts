import { Component, OnInit } from '@angular/core';
import { Convoca } from 'app/convocatoria';
import { CrearService } from 'app/service/crear.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convo-add',
  templateUrl: './convo-add.component.html',
  styleUrls: ['./convo-add.component.scss']
})
export class ConvoAddComponent implements OnInit {

  contacto: FormGroup;
  
  convocatoria: Convoca= new Convoca();
  submitted = false;

  constructor(private CrearService: CrearService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        id: ['', Validators.required], 
        descripcion: ['', Validators.required],   
        fecha_fin: ['', Validators.required],   
        fecha_inicio: ['', Validators.required],       
        estado: ['', Validators.required],
    });
}


get f() { return this.contacto.controls; }
 
onSubmit() {
    this.submitted = true;
    this.save();

    if (this.contacto.invalid) {
        return;
    }

    alert('Mensaje Enviado !')
}

  nuevo(): void {
    this.submitted = false;
    this.convocatoria = new Convoca();
  }


  save() {
    this.CrearService.create(this.convocatoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.convocatoria = new Convoca();
  }
}