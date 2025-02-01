import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttrSetbackground]'
})
export class AttrSetbackgroundDirective implements OnInit{
  constructor(private elemRef:ElementRef) { }
  ngOnInit(){
    this.elemRef.nativeElement.style.color = 'red';
    this.elemRef.nativeElement.style.background = 'tan';
    this.elemRef.nativeElement.classList.add('testing');
    console.log(this.elemRef.nativeElement);
  }

}
