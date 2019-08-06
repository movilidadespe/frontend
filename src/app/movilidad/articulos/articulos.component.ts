import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisitosService } from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { VerificacionService } from 'app/service/verificacion.service';

import { MatDialog } from '@angular/material';

import { isEmpty } from 'rxjs/operators';
import { Cronogra } from 'app/cronograma';
import { CrearService } from 'app/service/crear.service';
import { Testinter } from 'app/testinter';
import Swal from 'sweetalert2';

declare var $: any;


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
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
  vrm1: any = [];
  
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


  getRequisitomovsubm(id: number) {
    this.vrm1 = [];
    this.rest.getRequisitomovsubm(id).subscribe((data: {}) => {
      console.log("req1 "+data);
      this.vrm1 = data;
      

    });
  }
  getRequisitomovsubmfind(id: number) {
    this.vr = [];
    this.rest.getRequisitomovsubmfind(id).subscribe((data: {}) => {
      console.log("req1 "+data);
      this.vr = data;
      

    });
  }
  getRequisitomov1(id: number) {
    this.vr2 = [];
    this.rest.getRequisitomov1(id).subscribe((data: {}) => {
      console.log("req1 "+data);
      this.vr2 = data;
      

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


  getverif(id: number) {
    this.veri = [];
    this.restt.getverif(id).subscribe((data: {}) => {
      console.log(data);
      this.veri = data;

      if(this.veri[0].uzmtverireq_estado == true) {
      
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
    this.getRequisitomovsubm(id);
    this.getRequisitomov1(id);
    this.getRequisitomovsubmfind(id);
    this.getverif(id);

   
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
