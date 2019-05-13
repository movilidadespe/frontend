import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VerificacionService } from 'app/service/verificacion.service';
import { from } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
  
})

export class EstanciaComponent implements OnInit {
  
  veric= true;
  products:  any = [];
  veri: any = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  
  constructor(private router: Router, public rest: VerificacionService,private formBuilder: FormBuilder, public restt: ConsumirService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
}


getveri(id: number) {
  this.veri = [];
  this.rest.getveri(id).subscribe((data: {}) => {
    console.log(data);
    this.veri = data;
    console.log(this.veri[0].uzmtverireq_estado);
      console.log(this.veri[1].uzmtverireq_estado);
      console.log(this.veri[2].uzmtverireq_estado);
      if(this.veri[0].uzmtverireq_estado == true && this.veri[1].uzmtverireq_estado == true && this.veri[2].uzmtverireq_estado == true  ) {

     
      this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ["", Validators.required]
       });
       this.secondFormGroup = this.formBuilder.group({
         secondCtrl: ['', Validators.required]
       });
      }else{
      alert ("no cumple con los requisitos");
      }
  });
}

getProducts(id: number) {
  this.products = [];
  this.restt.getProducts(id).subscribe((data: {}) => {
    console.log(data);
    this.products = data;
    
  });
}

onSubmit(id) {
 this.getveri(id);
 this.getProducts(id);

}


checkValue(event: any){
  console.log(event);
}


 

}
