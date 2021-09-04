import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreacodesComponent } from './areacodes.component';

const routes: Routes = [{ path: '', component: AreacodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreacodesRoutingModule { }
