import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisitosService } from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { VerificacionService } from 'app/service/verificacion.service';

import { MatDialog } from '@angular/material';
import Swal from'sweetalert2';
import { isEmpty } from 'rxjs/operators';
import { Cronogra } from 'app/cronograma';
import { CrearService } from 'app/service/crear.service';
import { Testinter } from 'app/testinter';



declare var $: any;

@Component({
  selector: 'app-intercambio',
  templateUrl: './intercambio.component.html',
  styleUrls: ['./intercambio.component.scss']
})

export class IntercambioComponent implements OnInit {
  cronogra: Cronogra = new Cronogra();

  requisito: any;
  id: any;
  products: any = [];
  veri: any = [];
  vr: any = [];
  vr1: any = [];
  vr2: any = [];
  vr3: any = [];
  vr4: any = [];
  submitted= false;
  
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  constructor(public dialog: MatDialog, public restt: VerificacionService,private _formBuilder: FormBuilder ,private router: Router, private requisitosService: RequisitosService, public rest: ConsumirService,public resttt: CrearService) { }

  ngOnInit() {

  
  }




  nuevo(): void {
    this.submitted = false;
    this.cronogra = new Cronogra();

  }

  submit() {
    this.submitted = true;
    this.createcrono();
  }


  getProducts(id: number) {
    this.products = [];
    this.rest.getProducts(id).subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      if(this.products == false  ){

        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'El usuario no aplica o no existe',
        
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
      
        this.firstFormGroup = this._formBuilder.group({
      
      
        
        });
    
        this.secondFormGroup = this._formBuilder.group({
        
        });
    
        this.threeFormGroup = this._formBuilder.group({
     
          
        });

        this.fourFormGroup = this._formBuilder.group({

        });
      }else{


        this.firstFormGroup = this._formBuilder.group({
      
          nombre: ['', Validators.required]
            
        });
    
        this.secondFormGroup = this._formBuilder.group({
        
        });
    
        this.threeFormGroup = this._formBuilder.group({
          
        });

        
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'No cumples con los requisitos',
        
        })
  
       

      }

     });
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

  
  createcrono(){
    this.resttt.createcrono(this.cronogra)
    .subscribe(data => console.log(data), error => console.log(error));
    this.cronogra = new Cronogra();
  }


  usuarioguardado(){

    Swal.fire({
      type: 'success',
      title: 'Exito',
      text: 'Realizado con exito',
    
    })
    
  }

 
  

}
   