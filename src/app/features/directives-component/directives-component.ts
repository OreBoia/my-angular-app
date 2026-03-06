import { HigligthDirective } from './../customDirectives/higligth-directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-component',
  imports: [CommonModule,
            FormsModule,
            HigligthDirective],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css',
})
export class DirectivesComponent
{
  isVisible: boolean = true;
  showList: boolean = true;

  frameworks: string[] = ['Angular', 'React', 'Vue', 'ThreeJS']
  favoriteFrameworks: string = 'React'

  toggleList(): void{
    this.showList = !this.showList
  }

  addFramework(newFramework: string): void{
    this.frameworks.push(newFramework
    )
  }
}
