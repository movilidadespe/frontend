import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstanciaComponent } from './estancia/estancia.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { GestionComponent } from './gestion/gestion.component';
import { IntercambioComponent } from './intercambio/intercambio.component';
import { PlanesComponent } from './planes/planes.component';
import { ExternosComponent } from './externos/externos.component';

import { RouterModule } from '@angular/router';
import { IndexadaComponent } from './indexada/indexada.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [EstanciaComponent,
    ExternosComponent,
    ArticulosComponent,
    GestionComponent,
    IndexadaComponent,
    IntercambioComponent,
    PlanesComponent,
   
  ],
  exports: [
    ExternosComponent,
    ArticulosComponent,
    GestionComponent,
    IndexadaComponent,
    IntercambioComponent,
    PlanesComponent,
  ]
})
export class MovilidadModule { }
