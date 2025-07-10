import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Contratos } from "./contratos";
import { ContratoForm } from "./contrato-form/contrato-form";

const routes: Routes = [
  { path: '', component: Contratos },
  { path: 'new', component: ContratoForm },
  { path: 'edit/:id', component: ContratoForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContratosRoutingModule { }