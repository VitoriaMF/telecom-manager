import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Operadoras } from "./operadoras";
import { OperadoraForm } from "./operadora-form/operadora-form";

const routes: Routes = [
  { path: '', component: Operadoras },
  { path: 'new', component: OperadoraForm },
  { path: 'edit/:id', component: OperadoraForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OperadorasRoutingModule { }