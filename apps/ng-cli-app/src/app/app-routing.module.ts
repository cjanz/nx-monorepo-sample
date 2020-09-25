import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AUTH_ROUTES } from '@ng-cli-app/auth';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'auth', children: AUTH_ROUTES },
  {
    path: 'home',
    loadChildren: () =>
      import('@ng-cli-app/home/ui').then((m) => m.HomeUiModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('@ng-cli-app/customers/ui').then((m) => m.CustomersUiModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
