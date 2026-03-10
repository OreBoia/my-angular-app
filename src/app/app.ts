import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './features/base-component/base-component';
import { BindingComponent } from './features/binding-component/binding-component';
import { DirectivesComponent } from './features/directives-component/directives-component';
import { RegistrationComponent } from './features/registration-component/registration-component';
import { LoginComponent } from './features/login-component/login-component';
import { FatherComponent } from './features/father-component/father-component';
import { ChildComponent } from './features/child-component/child-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { SignalFormComponent } from './features/signal-form-component/signal-form-component';
import { ItemListComponent } from './features/item-list-component/item-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            BaseComponent,
            BindingComponent,
            DirectivesComponent,
            RegistrationComponent,
            LoginComponent,
            FatherComponent,
            ChildComponent,
            SignalExampleComponent,
            SignalFormComponent,
            ItemListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
