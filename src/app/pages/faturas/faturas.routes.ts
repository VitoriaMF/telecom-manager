import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Faturas } from "./faturas";
import { FaturaForm } from "./fatura-form/fatura-form";

const routes: Routes = [
  { path: '', component: Faturas },
  { path: 'new', component: FaturaForm },
  { path: 'edit/:id', component: FaturaForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FaturasRoutingModule { }