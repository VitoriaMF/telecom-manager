import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Dashboard
  },
  {
    path: 'operadoras',
    loadChildren: () => 
      import('./pages/operadoras/operadoras.routes').then(m => m.OperadorasRoutingModule)
  },
  {
    path: 'contratos',
    loadChildren: () => 
      import('./pages/contratos/contratos.routes').then(m => m.ContratosRoutingModule)
  },
  {
    path: 'faturas',
    loadChildren: () => 
      import('./pages/faturas/faturas.routes').then(m => m.FaturasRoutingModule)
  },
];
