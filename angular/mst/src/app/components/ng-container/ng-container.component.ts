import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.scss'
})
export class NgContainerComponent {

   items= [
     { name:'Javascript', active:true},
     { name:'ASP.NET Core', active:true},
     { name:'DBase', active:false}
   ]
   
}
