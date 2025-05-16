import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './historial.component';
import { AuthGuard } from '../service/AuthGuard';

const routes: Routes = [
  { path: '', component: HistorialComponent, canActivate: [AuthGuard]},
];

export const HistorialRoutes = RouterModule.forChild(routes);
