import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente.component';
import { AuthGuard } from '../service/AuthGuard';

const routes: Routes = [
  { path: '', component: PacienteComponent, canActivate: [AuthGuard]},
];

export const PacienteRoutes = RouterModule.forChild(routes);
