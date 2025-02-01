import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {
  private render2:Renderer2;
  private elementref:ElementRef;
  constructor(private element:ElementRef,private render:Renderer2) {
    this.render2 = render;
    this.elementref = element;
   }

   @HostListener('mouseenter') onEnter(){
    this.elementref.nativeElement.style.color = 'red';
    this.render2.setStyle(this.elementref.nativeElement,'background','yellow');
   }

   @HostListener('mouseout') onOut(){
    this.elementref.nativeElement.style.color = 'pink';
    this.render2.setStyle(this.elementref.nativeElement,'background','tan');
   }
}
