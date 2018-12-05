import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtinerairePage } from './etineraire';

@NgModule({
  declarations: [
    EtinerairePage,
  ],
  imports: [
    IonicPageModule.forChild(EtinerairePage),
  ],
})
export class EtinerairePageModule {}
