import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'auth', children: AUTH_ROUTES },
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
