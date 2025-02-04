import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
 messages:string[] = [];
  constructor() {
    console.log("calling log service");
   }
  log(message:string):void{
    console.log(message);
    this.messages.push(message);
  }
  clear(){
    this.messages = [];
  }
}
