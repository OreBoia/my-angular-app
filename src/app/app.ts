import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './features/base-component/base-component';
import { BindingComponent } from './features/binding-component/binding-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            BaseComponent,
            BindingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
