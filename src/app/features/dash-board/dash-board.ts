import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  imports: [],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard
{
  authService = inject(AuthService)
  private router = inject(Router)

  logout(): void{
    this.authService.logout()
    this.router.navigate(['/home'])
  }
}
