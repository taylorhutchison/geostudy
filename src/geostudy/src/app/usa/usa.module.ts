import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaRoutingModule } from './usa-routing.module';
import { UsaComponent } from './usa.component';


@NgModule({
  declarations: [
    UsaComponent
  ],
  imports: [
    CommonModule,
    UsaRoutingModule
  ]
})
export class UsaModule { }
