import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '**', redirectTo: 'maintenance' }, // Redirect all routes to the maintenance page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
