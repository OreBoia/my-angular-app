import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-service';
import { Router } from '@angular/router';
import { form, FormField, required } from '@angular/forms/signals';
import { FormGroup, FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

export interface UserLoginInfo{
  username: string,
  password: string,
  role: 'admin' | 'user'
}

@Component({
  selector: 'app-login-signal-component',
  imports: [FormField, FormsModule],
  templateUrl: './login-signal-component.html',
  styleUrl: './login-signal-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginSignalComponent
{
  authService = inject(AuthService)
  private router = inject(Router)

  loginModel = signal<UserLoginInfo>({
    username: '',
    password: '',
    role: 'user'
  })

  loginAuthForm = form(this.loginModel, (schema) => {
    required(schema.username)
    required(schema.password)
    required(schema.role)
  })

  onLogin(event: Event): void
  {
    event.preventDefault()

    this.authService.login({role: this.loginModel().role})

    console.log('Login effettuato per ', this.loginModel().username, '| ruolo: ', this.loginModel().role)

    this.router.navigateByUrl('/dashboard')
  }
}
