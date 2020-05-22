import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerAddComponent } from './employer-add/employer-add.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerViewComponent } from './employer-view/employer-view.component';
import { EmployerComponent } from './employer.component';
EmployerComponent

@NgModule({
  declarations: [EmployerAddComponent, EmployerComponent ,EmployerListComponent, EmployerEditComponent, EmployerViewComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})
export class EmployerModule { }
