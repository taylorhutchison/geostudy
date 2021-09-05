import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreacodesComponent } from './areacodes.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { StudyComponent } from './components/study/study.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'study', component: StudyComponent },
  { path: '', component: AreacodesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreacodesRoutingModule { }
