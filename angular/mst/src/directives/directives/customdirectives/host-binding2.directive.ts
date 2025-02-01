import {  Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBinding2]'
})
export class HostBinding2Directive {
  private render2:Renderer2;
  private elementref:ElementRef;
  constructor(private element:ElementRef,private render:Renderer2) {
    this.render2 = render;
    this.elementref = element;
   }

   @HostBinding('value') textInputValue:string = 'welcome';
 

}
