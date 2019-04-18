import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/convocatoria', title: 'Convocatoria',  icon: 'speaker_notes', class: '' },
    { path: '/movilidad/planes',     title: 'Movilidad', icon: 'transfer_within_a_station', class: '' },
    { path: '/mantenimiento', title: 'Mantenimiento',  icon:'build', class: '' },
    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
