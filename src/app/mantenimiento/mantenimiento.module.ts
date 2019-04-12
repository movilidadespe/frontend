import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PlanmovilidadComponent } from './planmovilidad/planmovilidad.component';
import { TipomovilidadComponent } from './tipomovilidad/tipomovilidad.component';
import { MovsubmComponent } from './movsubm/movsubm.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { ConvoComponent } from './convo/convo.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RequisitosComponent,
    MenuComponent,
    PlanmovilidadComponent,
    TipomovilidadComponent,
    MovsubmComponent,
    ConvenioComponent,
    ConvoComponent,
  ], 
  exports :[
    RequisitosComponent,
    MenuComponent,
    PlanmovilidadComponent,
    TipomovilidadComponent,
    MovsubmComponent,
    ConvenioComponent,
    ConvoComponent,
  ]
})

export class MantenimientoModule { }
