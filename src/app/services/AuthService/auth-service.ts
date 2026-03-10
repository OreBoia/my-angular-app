import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService
{
  private loggedIn = signal<boolean>(false)
  private role = signal<'admin' | 'user'>('user')

  login(options?: {role?: 'admin' | 'user'}): void
  {
    console.log("login")
    this.loggedIn.set(true)

    if(options?.role)
    {
      this.role.set(options.role)
    }
  }

  logout(): void
  {
    this.loggedIn.set(false)
  }

  isLoggedIn(): boolean
  {
    return this.loggedIn()
  }

  getRole(): 'admin' | 'user'
  {
    return this.role()
  }
}
