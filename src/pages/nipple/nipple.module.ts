import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NipplePage } from './nipple';

@NgModule({
  declarations: [
    NipplePage,
  ],
  imports: [
    IonicPageModule.forChild(NipplePage),
  ],
})
export class NipplePageModule {}
