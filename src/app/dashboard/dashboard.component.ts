import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  isAwesome = false;

  
  ngOnInit() {
  }
  
  
  estado() {
    this.isAwesome = !this.isAwesome;
    // could put additional logic here
 }
 


}