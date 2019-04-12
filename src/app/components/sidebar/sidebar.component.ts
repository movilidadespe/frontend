import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Convocatoria',  icon: 'dashboard', class: '' },
    { path: '/movilidad/planes',     title: 'Movilidad', icon: 'bubble_chart', class: '' },
    { path: '/mantenimiento', title: 'Mantenimiento',  icon:'location_on', class: '' },
    //{ path: '/convocatoria', title: 'Convocatoria2',  icon: 'dashboard', class: '' },

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
