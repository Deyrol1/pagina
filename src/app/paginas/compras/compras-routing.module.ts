import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { comprasPage } from './compras.page';

const routes: Routes = [
  {
    path: '',
    component: comprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class comprasPageRoutingModule {}
