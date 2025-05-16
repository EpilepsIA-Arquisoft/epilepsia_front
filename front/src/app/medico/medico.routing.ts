import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { AuthGuard } from '../service/AuthGuard';

const routes: Routes = [
  { path: '', component: MedicoComponent, canActivate: [AuthGuard]},
];

export const MedicoRoutes = RouterModule.forChild(routes);
