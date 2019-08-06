import { Component, OnInit } from '@angular/core';
import { MenuService } from 'app/service/menu.service';

declare const $: any;
declare interface RouteInfo {
   url: string;
    opcion: string;
    icono: string;
    clase: string;
}
export const ROUTES: RouteInfo[] = [

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItem: any = [];

  constructor(public rest: MenuService) { }

  ngOnInit() {
    this.menuItem = ROUTES.filter(menuItem => menuItem);
    this.getMenu();

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  getMenu() {
    this.menuItem = [];
    this.rest.getMenu().subscribe(data => {
      console.log(data.opciones);
      this.menuItem = data.opciones;

    });
  }

}
