import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourLeftComponent } from './hour-left/hour-left.component';

const routes: Routes = [
  { path: 'hours', component: HourLeftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }