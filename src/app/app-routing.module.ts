import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
// import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
// import { HomeComponent } from './pages/home/home.component';
// import { SobreComponent } from './pages/sobre/sobre.component';
// import { PageErrorComponent } from './pages/page-error/page-error.component';

import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';

//Guards
import { CanActivateGuard } from './shared/guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';

// const routes: Routes = [{
//   path: '',
//   component: ReactiveformsComponent
// }];

// const routes: Routes = [
//   { path : '', component: HomeComponent, pathMatch: 'full' },
//   { path : 'sobre', component: SobreComponent, children: [
//     { path : 'alvaro', component: SobreComponent }
//   ]},
//   {
//     path: 'dashboard',
//     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
//   },
//   { path : '404', component: PageErrorComponent },
//   { path : '**', redirectTo: '404' }
// ];

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'account', component: AccountComponent, canActivate: [CanActivateGuard], canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  export class AppRoutingModule { }
