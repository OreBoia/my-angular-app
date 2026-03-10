import { Injectable } from '@angular/core';

export interface User
{
  id: string,
  name: string,
  email: string,
  bio: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService
{
  private users: User[] = [
    {id: "1", name: 'Alice Rossi', email: 'alice@example.com', bio: 'Frontend developer'},
    {id: "2", name: 'Marco Bianchi', email: 'marco@example.com', bio: 'UX Designer'},
    {id: "3", name: 'Sara Verdi', email: 'sara@example.com', bio: 'Full-stack engineer'},
  ]

  async getUserAsync(id: string): Promise<User | undefined>
  {
    // await new Promise<void>((resolve) => setTimeout(resolve, 2000))
    return this.users.find(u => u.id === id)
  }

  getUser(id: string): User | undefined
  {
    return this.users.find(u => u.id === id)
  }
}
