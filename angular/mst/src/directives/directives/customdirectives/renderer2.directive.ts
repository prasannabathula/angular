import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer2]'
})
export class Renderer2Directive {
/*
 this.elemRef.nativeElement.style.color = 'red';
 nativeElement contains reference to DOM Object, it gives direct access to the DOM
 using this approach is not wrong but 
 ->screenshot


*/private render2:Renderer2;
private elementref:ElementRef;
  constructor(private element:ElementRef,private render:Renderer2) {
    this.render2 = render;
    this.elementref = element;
   }

   ngOnInit(){
    this.render2.addClass(this.elementref.nativeElement,'testClass');
    this.render2.setStyle(this.elementref.nativeElement,'color','red');
    this.render2.setStyle(this.elementref.nativeElement,'background','yellow');
    this.render2.setStyle(this.elementref.nativeElement,'width','150px');
    this.render2.setStyle(this.elementref.nativeElement,'height','100px');

   }
}
