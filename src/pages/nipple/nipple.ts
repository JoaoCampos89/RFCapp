import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JoystickProvider} from '../../providers/joystick/joystick';
import nipplejs from 'nipplejs';
import { interval } from 'rxjs/observable/interval';
import { sample } from 'rxjs/operators';
import { debounceTime} from 'rxjs/operators';

/**
 * Generated class for the NipplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nipple',
  templateUrl: 'nipple.html',
})




export class NipplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public joystick:JoystickProvider) {
      console.log(nipplejs);
      console.log(document.getElementsByClassName('.zone.static'));

}

  ionViewDidLoad() {
    this.joystick.initJoystick();
    //this.joystick.observeMoveElements().pipe(debounceTime(100)).subscribe(sub=>console.log(sub));
    this.joystick.observeMoveElements().pipe(sample(interval(500))).subscribe(sub=>console.log(sub));
     //this.joystick.observeEndElements().subscribe(sub=>console.log(sub));
    console.log('ionViewDidLoad NipplePage');
  }

}
