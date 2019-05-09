import { Component, OnInit } from '@angular/core';
import { Tipomov } from 'app/tipomv';
import { TipomovService } from 'app/service/tipomov.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipomovilidad-add',
  templateUrl: './tipomovilidad-add.component.html',
  styleUrls: ['./tipomovilidad-add.component.scss']
})
export class TipomovilidadAddComponent implements OnInit {
  tipomov: Tipomov = new Tipomov();
  contacto: FormGroup;
  submitted = false;

  constructor(private tipomovService: TipomovService, private router: Router, private formBuilder: FormBuilder   ) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        nombre: ['', Validators.required],         
        num_conv: ['', Validators.required]
    });
}

get f() { return this.contacto.controls; }


  nuevo(): void {
    this.submitted = false;
    this.tipomov = new Tipomov();
  }


  save() {
    this.tipomovService.create(this.tipomov)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tipomov = new Tipomov();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  checkVolver(){
    this.router.navigate(['mantenimiento/tipomovilidad'])
  }

}
