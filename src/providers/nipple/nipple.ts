import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
/*
  Generated class for the NippleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NippleProvider {
  robotIp:string;
  constructor(public http: HttpClient) {
    console.log('Hello NippleProvider Provider');
  }
  sendCommand(command:string){
    this.http.post(this.robotIp,{command:command}).pipe(debounceTime(500));
  }




}
