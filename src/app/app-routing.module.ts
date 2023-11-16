import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [{
  path: '',
  component: ReactiveformsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
