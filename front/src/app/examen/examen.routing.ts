import { Routes, RouterModule } from '@angular/router';
import { ExamenComponent } from './examen.component';
import { AuthGuard } from '../service/AuthGuard';


const routes: Routes = [
  { path: '', component: ExamenComponent, canActivate: [AuthGuard] },
];

export const ExamenRoutes = RouterModule.forChild(routes);
