import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreacodesRoutingModule } from './areacodes-routing.module';
import { AreacodesComponent } from './areacodes.component';


@NgModule({
  declarations: [
    AreacodesComponent
  ],
  imports: [
    CommonModule,
    AreacodesRoutingModule
  ]
})
export class AreacodesModule { }
