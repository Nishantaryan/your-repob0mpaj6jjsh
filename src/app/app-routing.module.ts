import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent ,
  children: [
    { path: '', redirectTo: 'employers', pathMatch: 'full' },
    { path: 'employers', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule) },
  
  ]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
