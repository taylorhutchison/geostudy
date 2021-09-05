import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MultiChoiceQuestionComponent } from './components/multi-choice-question/multi-choice-question.component';
import { MultiChoiceOptionsComponent } from './components/multi-choice-options/multi-choice-options.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotfoundComponent,
    MultiChoiceQuestionComponent,
    MultiChoiceOptionsComponent,
    HeaderComponent
  ],
  exports: [
    MultiChoiceQuestionComponent,
    MultiChoiceOptionsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
