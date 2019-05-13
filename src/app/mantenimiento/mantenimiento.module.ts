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
import { ConvoAddComponent } from './convo/convo-add/convo-add.component';
import { ConvoEditComponent } from './convo/convo-edit/convo-edit.component';
import { ConvenioAddComponent } from './convenio/convenio-add/convenio-add.component';
import { ConvenioEditComponent } from './convenio/convenio-edit/convenio-edit.component';
import { MovsubmAddComponent } from './movsubm/movsubm-add/movsubm-add.component';
import { MovsubmEditComponent } from './movsubm/movsubm-edit/movsubm-edit.component';
import { PlanmovAddComponent } from './planmovilidad/planmov-add/planmov-add.component';
import { PlanmovEditComponent } from './planmovilidad/planmov-edit/planmov-edit.component';
import { RequisitosAddComponent } from './requisitos/requisitos-add/requisitos-add.component';
import { RequisitosEditComponent } from './requisitos/requisitos-edit/requisitos-edit.component';
import { TipomovilidadAddComponent } from './tipomovilidad/tipomovilidad-add/tipomovilidad-add.component';
import { TipomovilidadEditComponent } from './tipomovilidad/tipomovilidad-edit/tipomovilidad-edit.component';


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
    ConvoAddComponent,
    ConvoEditComponent,
    ConvenioAddComponent,
    ConvenioEditComponent,
    MovsubmAddComponent,
    MovsubmEditComponent,
    PlanmovAddComponent,
    PlanmovEditComponent,
    RequisitosAddComponent,
    RequisitosEditComponent,
    TipomovilidadAddComponent,
    TipomovilidadEditComponent,
  ], 
  exports :[
    RequisitosComponent,
    MenuComponent,
    PlanmovilidadComponent,
    TipomovilidadComponent,
    MovsubmComponent,
    ConvenioComponent,
    ConvoComponent,
    ConvoAddComponent,
    RequisitosAddComponent,
    ConvenioAddComponent,
    MovsubmAddComponent,
    PlanmovAddComponent,
    TipomovilidadAddComponent,
    RequisitosEditComponent,
    PlanmovEditComponent,
    TipomovilidadEditComponent,
    ConvenioEditComponent,
    
  ]
})

export class MantenimientoModule { }
