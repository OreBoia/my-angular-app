import { UserService } from './../../services/UserService/user-service';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, resource } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css',
})
export class UserProfileComponent
{
  id = input.required<string>()

  private userService = inject(UserService)

  //Sincrono
  userFinded = computed(() => this.userService.getUser(this.id()))

  //Asincrono
  userResource = resource({
    params: () => ({id: this.id()}),
    loader: ({params}) => this.userService.getUserAsync(params.id)
  })
}
