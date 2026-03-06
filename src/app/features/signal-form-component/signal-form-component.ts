import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, pattern, required } from '@angular/forms/signals';

interface ContactData{
  name: string,
  email:string,
  phone: string,
  age: number,
  message: string
}

@Component({
  selector: 'app-signal-form-component',
  imports: [FormField],
  templateUrl: './signal-form-component.html',
  styleUrl: './signal-form-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFormComponent
{
  contactModel = signal<ContactData>({
    name: '',
    email: '',
    phone: '',
    age: 0,
    message: ''
  })

  contactForm = form(this.contactModel, (schema) =>{
    required(schema.name, {message: 'il nome è obbligatorio'})
    minLength(schema.name, 2, {message: "Minimo 2 caratteri"})
    maxLength(schema.name, 10, {message: "Massimo 10 caratteri"})

    required(schema.email, {message: "Email obbligatoria"})
    email(schema.email, {message: "formato email non valido"})

    required(schema.phone, {message: "numero obbligatorio"})
    pattern(schema.phone, /^\+?[0-9]{8,15}$/, {message:"inserisci un numero valido (8-15 cifre)"})

    required(schema.message, {message: 'il messaggio è obbligatorio'})
    minLength(schema.message,10, {message: 'min 10 caratteri'})
    maxLength(schema.message,500, {message: 'max 500 caratteri'})
  })

  onSubmit(event: Event): void
  {
    event.preventDefault()
    console.log("Dati;", this.contactModel())
  }
}
