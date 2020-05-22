import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerAddComponent } from './employer-add/employer-add.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerViewComponent } from './employer-view/employer-view.component';


const routes: Routes = [
  {path : '', component : EmployerListComponent},
  {path : 'add', component : EmployerAddComponent},
  {path : 'edit' , component : EmployerEditComponent},
  {path : 'view' , component : EmployerViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
