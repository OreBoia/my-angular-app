import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent
{
  //No Signal
  // @Input()
  // childCounter: number = 0

  // @Output()
  // counterEvent: EventEmitter<number> = new EventEmitter<number>()

  // add(): void
  // {
  //   this.counterEvent.emit(this.childCounter++)
  // }

  // sub(): void
  // {
  //   this.counterEvent.emit(this.childCounter--)
  // }

  //Signal
  childCounterSignal = input<number>(0)
  childChangeSignal = output<number>()

  addSignal(){
    this.childChangeSignal.emit(this.childCounterSignal() + 1)
  }

  subSignal(){
    this.childChangeSignal.emit(this.childCounterSignal() - 1)
  }
}
