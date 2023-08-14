import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginModel = new LoginModel();
  loginFailed: boolean = false;

  constructor( private router: Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
  }

  login(): void {
    // debugger
    // if(this.loginModel.userName === 'Admin' && this.loginModel.password === '12345'){
      this.router.navigate(["../dashboard"]);
    // }else{
    //   this.loginFailed = true;
    // }

  }
}
