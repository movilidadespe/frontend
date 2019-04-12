import { Routes } from '@angular/router';

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
];
