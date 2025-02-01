import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { AttrSetbackgroundDirective } from './directives/customdirectives/attr-setbackground.directive';
import { Renderer2Directive } from './directives/customdirectives/renderer2.directive';
import { HostListenerDirective } from './directives/customdirectives/host-listener.directive';
import { HostBindingDirective } from './directives/customdirectives/host-binding.directive';
import { HostBindingListenerDirective } from './directives/customdirectives/host-binding-listener.directive';
import { HostBinding2Directive } from './directives/customdirectives/host-binding2.directive';


@NgModule({
  declarations: [
    DirectivesComponent,
    AttrSetbackgroundDirective,
    Renderer2Directive,
    HostListenerDirective,
    HostBindingDirective,
    HostBindingListenerDirective,
    HostBinding2Directive,
  ],
  imports: [
    CommonModule
  ],
  exports:[    
    DirectivesComponent,
    AttrSetbackgroundDirective 
  ]
})
export class DirectivesModule { }
