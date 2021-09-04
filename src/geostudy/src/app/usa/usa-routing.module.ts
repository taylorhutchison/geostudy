import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsaComponent } from './usa.component';

const routes: Routes = [
  { path: 'areacodes', loadChildren: () => import('./areacodes/areacodes.module').then(m => m.AreacodesModule) },
  { path: '', pathMatch: 'full', component: UsaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsaRoutingModule { }
