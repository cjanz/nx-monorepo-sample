import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'auth', children: AUTH_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
