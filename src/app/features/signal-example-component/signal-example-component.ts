import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example-component',
  imports: [],
  templateUrl: './signal-example-component.html',
  styleUrl: './signal-example-component.css',
})
export class SignalExampleComponent
{
  counter = signal(0) // Crea un signal numerico inizializzato a 0 (writable)

  doubleCounter = computed(() => this.counter() * 2)

  constructor(){
    this.useSignal()
    effect(() => {
      console.log(`il Counter raddoppiato è diventato: ${this.doubleCounter()}`) // ` => (alt + 9 + 6)
    })
  }

  useSignal(): void
  {
    console.log(this.counter())
  }

  setSignal():void
  {
    this.counter.set(this.counter() + 10)
    this.useSignal()
  }

  updateSignal():void{
    this.counter.update(val => val + 1)
    this.useSignal
  }
}
