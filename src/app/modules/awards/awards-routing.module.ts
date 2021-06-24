import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardsComponent } from './page/awards/awards.component';

const routes: Routes = [
  {
    path: '',
    component: AwardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsRoutingModule { }
