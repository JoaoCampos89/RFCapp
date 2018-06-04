import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import nipplejs from 'nipplejs';
import { Observable } from "rxjs/Observable";
import { interval } from 'rxjs/observable/interval';
import { sample } from 'rxjs/operators';


/*
  Generated class for the JoystickProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//http://yoannmoinet.github.io/nipplejs/#demo


@Injectable()
export class JoystickProvider {
  joystick:any;
  robotIp:string;
  constructor(public http: HttpClient) {
    console.log('Hello JoystickProvider Provider');
  }
  public initJoystick(divElement?:any){
      const joystickOptions = {
                zone: document.getElementById('joystick'),
                mode: 'static',
                size: 300,
                position: {
                  left: '50%',
                  top: '50%'
                },
                color: 'blue'
                }

      this.joystick = nipplejs.create(joystickOptions);

    /*  this.joystick.on('start end', function(evt, data) {
              //console.log(data);
                }).on('move', function(evt, data) {
                    console.log(data);
                }).on('dir:up plain:up dir:left plain:left dir:down ' +
                      'plain:down dir:right plain:right',
                      function(evt, data) {
                    //      console.log(data);
                }).on('pressure', function(evt, data) {
                      //    console.log(data)
                });*/
  }
  public observeMoveElements():Observable<any>{
    return new Observable((observer) =>{
        this.joystick.on('move', (evt, data) => {
                        observer.next(data);
                    });
              });
    }
    public observeEndElements():Observable<any>{
      return new Observable((observer) =>{
          this.joystick.on('end', (evt, data) => {
                          observer.next(data);
                      });
                });
      }
    public handleJoystick(){
          this.joystick.observeMoveElements().pipe(sample(interval(500)))
                    .subscribe(data=>{
                        this.http.post(this.robotIp,{command:command}).pipe(debounceTime(500));


                    });



    }


  }
