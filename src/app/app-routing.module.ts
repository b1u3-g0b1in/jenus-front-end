import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dev-login', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: '**', redirectTo: 'maintenance' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
