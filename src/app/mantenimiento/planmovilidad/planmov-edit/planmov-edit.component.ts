import { Component, OnInit } from '@angular/core';
import { Planmov } from 'app/planmov';
import { PlanmovService } from 'app/service/planmov.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planmov-edit',
  templateUrl: './planmov-edit.component.html',
  styleUrls: ['./planmov-edit.component.scss']
})
export class PlanmovEditComponent implements OnInit {

  planmov: Planmov = new Planmov();
  contacto: FormGroup;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,private planmovService: PlanmovService, private router: Router, private formBuilder: FormBuilder ) { }

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
    this.planmov = new Planmov();
  }


  save() {
    this.planmov.id_planmov = this.activatedRoute.snapshot.paramMap.get("uzmtplanmov_id");
    this.planmovService.create(this.planmov)
      .subscribe(data => console.log(data), error => console.log(error));
    this.planmov = new Planmov();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  checkVolver(){
    this.router.navigate(['mantenimiento/planmovilidad'])
  }

}
