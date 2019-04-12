import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RequisitosComponent,
    MenuComponent,
  ], 
  exports :[
    RequisitosComponent,
    MenuComponent,
  ]
})

export class MantenimientoModule { }
