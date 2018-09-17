import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[host-listener]'
})
export class HostListenerDirective {

  constructor(private _elementRef: ElementRef) {
    _elementRef.nativeElement.style.backgroundColor = 'green';
  }
  
  @HostListener('click') do_click(){
    console.log('click');
  }

  @HostListener('mouseenter') do_mouse_enter(){
    console.log('mouseenter');
  }

  @HostListener('mouseleave') do_mouse_leave(){
    console.log('mouseleave');
  }

  @HostListener('mousemove') do_mouse_move(){
    console.log('mousemove');
  }


}
