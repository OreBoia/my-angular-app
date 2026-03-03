import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule],
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
})
export class BindingComponent
{
  username: string = 'Marco'
  imageURL: string = 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png.webp'
  imageURL2:string = 'https://www.technocrazed.com/wp-content/uploads/2015/12/landscape-wallpaper_47.jpg'
  message: string = '"Buongiorno"'
  messages: string[] = ["Buongiorno", "Buon pomeriggio", "Buona sera"]
  index: number = 0

  saluta(): void
  {
    // this.message = 'Ciao dal Pulsante'
    this.index += 1;
    if(this.index >= this.messages.length) this.index = 0;
    this.message = this.messages[this.index]
  }

  cambiaNomeUtente(): void{
    this.username = "Alberto"
  }
}
