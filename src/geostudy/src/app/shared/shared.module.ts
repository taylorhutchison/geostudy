import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MultiChoiceQuestionComponent } from './components/multi-choice-question/multi-choice-question.component';
import { MultiChoiceOptionsComponent } from './components/multi-choice-options/multi-choice-options.component';



@NgModule({
  declarations: [
    NotfoundComponent,
    MultiChoiceQuestionComponent,
    MultiChoiceOptionsComponent
  ],
  exports: [
    MultiChoiceQuestionComponent,
    MultiChoiceOptionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
