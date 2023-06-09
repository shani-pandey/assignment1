import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

const routes: Routes = [
  {path:'comp1', component:Comp1Component},
  {path:'comp2', component:Comp2Component},
  {path:'modelComp', component:ModalCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
