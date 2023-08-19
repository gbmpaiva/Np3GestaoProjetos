import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



loginForm!: FormGroup;



constructor( private formbuilder : FormBuilder,
  private router: Router ) { }
ngOnInit():void{
  this.loginForm = this.formbuilder.group(
    {
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required]
    }
  );

}
submitLogin()
{
  debugger
  var dadosLogin = this.loginForm.getRawValue() as LoginModel;
}

}



