import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-father-component',
  imports: [ChildComponent],
  templateUrl: './father-component.html',
  styleUrl: './father-component.css',
})
export class FatherComponent
{
  //No Signal
  // fatherCounter: number = 0;

  // onCounterChanged(newValue: number): void
  // {
  //   this.fatherCounter = newValue
  // }

  //Signal
  fatherCounterSignal = signal<number>(0)

  onCounterSignalChanged(newValue: number): void{
    this.fatherCounterSignal.set(newValue)
  }
}
