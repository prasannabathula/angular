import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBindingListener]'
})
export class HostBindingListenerDirective {
  private render2:Renderer2;
  private elementref:ElementRef;
  constructor(private element:ElementRef,private render:Renderer2) {
    this.render2 = render;
    this.elementref = element;
   }

   @HostBinding('style.background') backgroundProperty:string = 'white';
   @HostBinding('style.color') colorProperty:string = 'black';
   @HostBinding('style.outline') outlineProperty:string = '2px solid black';

   @HostListener('mouseenter') onEnter(){
    this.backgroundProperty = 'tan';
    this.colorProperty = 'green';
    this.outlineProperty = '2px solid green';
   }

   @HostListener('mouseout') onOut(){
    this.backgroundProperty = 'white';
    this.colorProperty = 'black';
    this.outlineProperty = '2px solid black';
   }

}
