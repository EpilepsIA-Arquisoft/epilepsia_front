import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../service/AuthGuard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
];

export const HomeRoutes = RouterModule.forChild(routes);
