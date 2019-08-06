import { Component, OnInit } from '@angular/core';
import { Tipomov } from 'app/tipomv';
import { TipomovService } from 'app/service/tipomov.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipomovilidad-edit',
  templateUrl: './tipomovilidad-edit.component.html',
  styleUrls: ['./tipomovilidad-edit.component.scss']
})
export class TipomovilidadEditComponent implements OnInit {
  tipomov: Tipomov = new Tipomov();
  contacto: FormGroup;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,private tipomovService: TipomovService, private router: Router, private formBuilder: FormBuilder   ) { }

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
    this.tipomov.id = this.activatedRoute.snapshot.paramMap.get("tipmov_id");
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
