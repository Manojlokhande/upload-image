import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[yellow]'
})
export class CustomDirectiveDirective {

  constructor(private _elementRef: ElementRef) {
      _elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

}
