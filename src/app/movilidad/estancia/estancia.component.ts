import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { VerificacionService } from 'app/service/verificacion.service';
import { CronogramaService } from '../service/cronograma.sevice';
import { FinanciamientoService } from '../service/financiamiento.service';
import { Cronograma } from '../models/cronograma';
import Swal from'sweetalert2';
import { RequisitosService } from 'app/service/requisitos.service';
import { Financiamiento } from '../models/financiamiento';



declare var $: any;

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
  
})

export class EstanciaComponent implements OnInit {
  

  cronograma: Cronograma= new Cronograma();
  financiamiento: Financiamiento= new Financiamiento();
  contacto: FormGroup;
  submitted = false;

  requisito: any;
  id: any;
  products: any = [];
  veri: any = [];
  vr: any = [];
  vr1: any = [];
  vr2: any = [];
  vr3: any = [];
  vr4: any = [];
  isLinear = true;

  myGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  
  constructor(private FinanciamientoService: FinanciamientoService , private CronogramaService: CronogramaService , 
    public restt: VerificacionService,private formBuilder: FormBuilder, 
    private router: Router, private requisitosService: RequisitosService, 
    public rest: ConsumirService) { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl()
   });
}

get f() { return this.contacto.controls; }

getProducts(id: number) {
  this.products = [];
  this.rest.getProducts(id).subscribe((data: {}) => {
    console.log(data);
    this.products = data;
    if(this.products == false  ){

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'El usuario no existe',      
      })
      }
  });
}

getRequisitot(id: number) {
  this.vr = [];
  this.rest.getRequisitot(id).subscribe((data: {}) => {
    console.log("req "+data);
    this.vr = data;
  });
}

getRequisito1(id: number) {
  this.vr1 = [];
  this.rest.getRequisito1(id).subscribe((data: {}) => {
    console.log("req1 "+data);
    this.vr1 = data;
  });
}

getRequisito2(id: number) {
  this.vr2 = [];
  this.rest.getRequisito2(id).subscribe((data: {}) => {
    console.log("req2 "+data);
    this.vr2 = data;
  });
}

getRequisito3(id: number) {
  this.vr3 = [];
  this.rest.getRequisito3(id).subscribe((data: {}) => {
    console.log("req3 "+data);
    this.vr3 = data;
  });
}

getRequisito4(id: number) {
  this.vr4 = [];
  this.rest.getRequisito4(id).subscribe((data: {}) => {
    console.log("req4 "+data);
    this.vr4 = data;
  });
}

getrequisito() {
  // console.log('entre')
  this.requisitosService.getrequisito().subscribe(data => {
    if (data) {
      console.log('requisito,data')
      this.requisito = data;      
    }
  }); 
}

getveri(id: number) {
  this.veri = [];
  this.restt.getveri(id).subscribe((data: {}) => {
    console.log(data);
    this.veri = data;

    if(this.veri[0].uzmtverireq_estado == true && this.veri[1].uzmtverireq_estado == true && this.veri[2].uzmtverireq_estado == true   && this.veri[3].uzmtverireq_estado == true) {
    
      this.firstFormGroup = this.formBuilder.group({      
      });
  
      this.secondFormGroup = this.formBuilder.group({
      });
  
      this.threeFormGroup = this.formBuilder.group({
      });

      this.fourFormGroup = this.formBuilder.group({
      });

    }else{
      this.firstFormGroup = this.formBuilder.group({
        nombre: ['', Validators.required],
      });
  
      this.secondFormGroup = this.formBuilder.group({
      });

      this.threeFormGroup = this.formBuilder.group({      
      });

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'No cumples con los requisitos',
      })
    }
   });
}


save() {
  this.CronogramaService.create(this.cronograma)
    .subscribe(data => console.log(data), error => console.log(error));    
  this.cronograma = new Cronograma();
 } 
 save1() {
  this.FinanciamientoService.create(this.financiamiento)
    .subscribe(data => console.log(data), error => console.log(error));    
  this.financiamiento = new Financiamiento();
 } 

 onSubmit1() {
  this.submitted = true;
  this.save();

}
onSubmit2() {
  this.submitted = true;
  this.save1();

}

onSubmit(id) {
  this.getProducts(id);
  this.getRequisitot(id);
  this.getRequisito1(id);
  this.getRequisito2(id);
  this.getRequisito3(id);
  this.getRequisito4(id);
  this.getveri(id);
}
checkVolver(){
  this.router.navigate(['planes'])
}
}
 

 

