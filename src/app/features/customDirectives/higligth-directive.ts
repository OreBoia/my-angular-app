import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[higligthDir]',
})
export class HigligthDirective {

  constructor(el: ElementRef)
  {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
