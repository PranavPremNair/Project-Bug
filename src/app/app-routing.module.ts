import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebugComponent } from './createbug/createbug.component';

const routes: Routes = [
  {path:'', component:CreatebugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }