import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },

  {
    path: 'folder/compras',
    loadChildren: () => import('./paginas/compras/compras.module').then( m => m.comprasPageModule)
  },
  {
    path: 'folder/facturas',
    loadChildren: () => import('./paginas/facturas/facturas.module').then( m => m.FacturasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
