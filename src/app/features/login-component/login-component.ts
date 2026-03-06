import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent
{
  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>("", [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    password: new FormControl<string>("", [ Validators.required,
                                            Validators.maxLength(12),
                                            Validators.minLength(8),
                                            Validators.pattern("[a-zA-Z0-9!?]*")])
  })

  user= {username:"", password:""}

  onLogin(): void
  {
    if(this.loginForm.valid)
    {
      const datiLogin = this.loginForm.value
      this.user.username = datiLogin.username
      this.user.password = datiLogin.password
    }
  }
}
