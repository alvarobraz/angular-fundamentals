  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  // Components
  // import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
  import { HomeComponent } from './pages/home/home.component';
  import { SobreComponent } from './pages/sobre/sobre.component';
  import { PageErrorComponent } from './pages/page-error/page-error.component';

  // const routes: Routes = [{
  //   path: '',
  //   component: ReactiveformsComponent
  // }];

  const routes: Routes = [
    { path : '', component: HomeComponent, pathMatch: 'full' },
    { path : 'sobre/:id/:username', component: SobreComponent },
    { path : '404', component: PageErrorComponent },
    { path : '**', redirectTo: '404' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
