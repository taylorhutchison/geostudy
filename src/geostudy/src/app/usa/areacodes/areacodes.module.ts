import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreacodesRoutingModule } from './areacodes-routing.module';
import { AreacodesComponent } from './areacodes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizComponent } from './components/quiz/quiz.component';
import { StudyComponent } from './components/study/study.component';


@NgModule({
  declarations: [
    AreacodesComponent,
    QuizComponent,
    StudyComponent
  ],
  imports: [
    CommonModule,
    AreacodesRoutingModule,
    SharedModule
  ]
})
export class AreacodesModule { }
