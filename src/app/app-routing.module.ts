import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [{
  path:'link',
  component:Comp1Component

}];
//for dynamic routing use link/:no
//in the routed file inside constructor add private route ActivateRoute
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
