
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { LoginComponent } from 'app/login/login.component';

import { PlanesComponent } from 'app/movilidad/planes/planes.component';
import { EstanciaComponent } from 'app/movilidad/estancia/estancia.component';
import { IndexadaComponent } from 'app/movilidad/indexada/indexada.component';
import { IntercambioComponent } from 'app/movilidad/intercambio/intercambio.component';
import { ArticulosComponent } from 'app/movilidad/articulos/articulos.component';
import { GestionComponent } from 'app/movilidad/gestion/gestion.component';
import { ExternosComponent } from 'app/movilidad/externos/externos.component';
import { ConvocatoriaComponent } from 'app/convocatoria/convocatoria.component';
import { MenuComponent } from 'app/mantenimiento/menu/menu.component';
import { RequisitosComponent } from 'app/mantenimiento/requisitos/requisitos.component';
import { PlanmovilidadComponent } from 'app/mantenimiento/planmovilidad/planmovilidad.component';
import { TipomovilidadComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad.component';
import { MovsubmComponent } from 'app/mantenimiento/movsubm/movsubm.component';
import { ConvenioComponent } from 'app/mantenimiento/convenio/convenio.component';
import { ConvoComponent } from 'app/mantenimiento/convo/convo.component';
import { ConvoAddComponent } from 'app/mantenimiento/convo/convo-add/convo-add.component';
import { RequisitosAddComponent } from 'app/mantenimiento/requisitos/requisitos-add/requisitos-add.component';
import { TipomovilidadAddComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad-add/tipomovilidad-add.component';
import { PlanmovAddComponent } from 'app/mantenimiento/planmovilidad/planmov-add/planmov-add.component';
import { MovsubmAddComponent } from 'app/mantenimiento/movsubm/movsubm-add/movsubm-add.component';
import { ConvenioAddComponent } from 'app/mantenimiento/convenio/convenio-add/convenio-add.component';
import { RequisitosEditComponent } from 'app/mantenimiento/requisitos/requisitos-edit/requisitos-edit.component';
import { PlanmovEditComponent } from 'app/mantenimiento/planmovilidad/planmov-edit/planmov-edit.component';
import { TipomovilidadEditComponent } from 'app/mantenimiento/tipomovilidad/tipomovilidad-edit/tipomovilidad-edit.component';
import { MovsubmEditComponent } from 'app/mantenimiento/movsubm/movsubm-edit/movsubm-edit.component';
import { ConvenioEditComponent } from 'app/mantenimiento/convenio/convenio-edit/convenio-edit.component';
import { ConvoEditComponent } from 'app/mantenimiento/convo/convo-edit/convo-edit.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'movilidad/indexada',        component: IndexadaComponent },
    { path: 'movilidad/planes',        component: PlanesComponent },
    { path: 'movilidad/estancia',        component: EstanciaComponent },
    { path: 'movilidad/intercambio',        component: IntercambioComponent },
    { path: 'movilidad/articulos',        component: ArticulosComponent },
    { path: 'movilidad/gestion',        component: GestionComponent },
    { path: 'movilidad/externos',        component: ExternosComponent },
    { path: 'convocatoria',        component: ConvocatoriaComponent },
    { path: 'mantenimiento',        component: MenuComponent },
    { path: 'mantenimiento/requisitos',        component: RequisitosComponent },
    { path: 'mantenimiento/planmovilidad',        component: PlanmovilidadComponent },
    { path: 'mantenimiento/tipomovilidad',        component: TipomovilidadComponent },
    { path: 'mantenimiento/movsubm',        component: MovsubmComponent },
    { path: 'mantenimiento/convenio',        component: ConvenioComponent },
    { path: 'mantenimiento/convo',        component: ConvoComponent },
    { path: 'mantenimiento/convo/convo-add',        component: ConvoAddComponent },
    { path: 'mantenimiento/requisitos/requisitos-add',  component: RequisitosAddComponent },
    { path: 'mantenimiento/convevio/convevio-add', component: ConvenioAddComponent},
    { path: 'mantenimiento/tipomovilidad/tipomovilidad-add', component: TipomovilidadAddComponent},
    { path: 'mantenimiento/planmovilidad/planmov-add', component: PlanmovAddComponent},
    { path: 'mantenimiento/movsubm/movsubm-add', component: MovsubmAddComponent},
    { path: 'mantenimiento/requisitos/requisitos-edit/:id_requisito',  component: RequisitosEditComponent},
    { path: 'mantenimiento/planmovilidad/planmov-edit/:uzmtplanmov_id',  component: PlanmovEditComponent},
    { path: 'mantenimiento/tipomovilidad/tipomovilidad-edit/:tipmov_id',  component: TipomovilidadEditComponent},
    { path: 'mantenimiento/movsubm/movsubm-edit/:uzmtmovsubm_id',  component: MovsubmEditComponent},
    { path: 'mantenimiento/convenio/convenio-edit/:uzmtconvenio_id',  component: ConvenioEditComponent},
    { path: 'mantenimiento/convo/convo-edit/:convo_id',  component: ConvoEditComponent},


];
