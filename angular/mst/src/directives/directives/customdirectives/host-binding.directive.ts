import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  private render2:Renderer2;
  private elementref:ElementRef;
  constructor(private element:ElementRef,private render:Renderer2) {
    this.render2 = render;
    this.elementref = element;
   }

   @HostBinding('style.background') backgroundProperty:string = 'lightblue';
   @HostBinding('style.color') colorProperty:string = 'green';
   @HostBinding('style.outline') outlineProperty:string = '2px solid green';

}
