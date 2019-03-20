import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService} from '../service/authentication.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username='jose';
  password='12345';
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  checkLogin(){
    if(this.loginservice.authenticate(this.username, this.password)){
      this.router.navigate(['maps'])
      this.invalidLogin= false
    }else
    this.invalidLogin=true
  }

}
