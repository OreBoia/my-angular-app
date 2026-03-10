import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
