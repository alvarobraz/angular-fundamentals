import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadssComponent } from './pages/leadss/leadss.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'leads',
    component: LeadssComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
