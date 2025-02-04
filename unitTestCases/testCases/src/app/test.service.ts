import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private logService:LogService) { 
  }

  add(a:number,b:number):number{
    this.logService.log(`calling add for ${a} and ${b}`);
    return a+b;
  }
}
