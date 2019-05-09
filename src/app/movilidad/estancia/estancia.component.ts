import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisitosService } from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AssertNotNull } from '@angular/compiler';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined, isNull } from 'util';

declare var $: any;

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
  
})

export class EstanciaComponent implements OnInit {

  requisito: any =[];
  id: any;
  form: FormGroup;


  constructor(private router: Router, public rest: RequisitosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getrequisito();
    this.form = this.formBuilder.group({
      checkbox1: [''],
      checkbox2: [''],
      checkbox3: [''],
      checkbox4: [''],
    });

    this.form.setErrors({required: true});
    this.form.valueChanges.subscribe((newValue) => {
      if (newValue.checkbox1 === true && newValue.checkbox2 === true && newValue.checkbox3 === true && newValue.checkbox4 === true) {
        this.form.setErrors(null);
      } else {
        this.form.setErrors({required: false});
      }
    });

  }

 
  getrequisito() {
    this.requisito = [];
    this.rest.getrequisito().subscribe((data: {}) => {
        console.log(data);
        this.requisito = data;
    });

  }
}
