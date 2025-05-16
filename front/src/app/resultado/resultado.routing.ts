import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './resultado.component';
import { AuthGuard } from '../service/AuthGuard';


const routes: Routes = [
  { path: '', component: ResultadoComponent, canActivate: [AuthGuard] },  // <- Bloquea acceso
];

export const ResultadoRoutes = RouterModule.forChild(routes);
