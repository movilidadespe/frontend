import { Component, OnInit } from '@angular/core';
import { Movsubm } from 'app/movsubm';
import { MovsubmService } from 'app/service/movsubm.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movsubm-edit',
  templateUrl: './movsubm-edit.component.html',
  styleUrls: ['./movsubm-edit.component.scss']
})
export class MovsubmEditComponent implements OnInit {

  movsubm: Movsubm = new Movsubm();
  contacto: FormGroup;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute ,private movsubmService: MovsubmService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        Id: ['', Validators.required],    
        nombre: ['', Validators.required],         
        tip_mov: ['', Validators.required],
    });
}

get f() { return this.contacto.controls; }

  nuevo(): void {
    this.submitted = false;
    this.movsubm = new Movsubm();
  }


  save() {

    this.movsubm.id= this.activatedRoute.snapshot.paramMap.get("uzmtmovsubm_id");
    this.movsubmService.create(this.movsubm)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movsubm = new Movsubm();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  checkVolver(){
    this.router.navigate(['mantenimiento/movsubm'])
  }
}
