import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
 },
 {
  path:'register',
  component:RegisterComponent,
  pathMatch:'full'
 },
 {
  path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
 },
 {
  path:'**',
  redirectTo:''
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
