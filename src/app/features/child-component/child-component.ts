import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent
{
  @Input()
  childCounter: number = 0

  @Output()
  counterEvent: EventEmitter<number> = new EventEmitter<number>()

  add(): void
  {
    this.counterEvent.emit(this.childCounter++)
  }

  sub(): void
  {
    this.counterEvent.emit(this.childCounter--)
  }
}
