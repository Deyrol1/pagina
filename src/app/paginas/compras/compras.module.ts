import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { comprasPageRoutingModule } from './compras-routing.module';

import { comprasPage } from './compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    comprasPageRoutingModule
  ],
  declarations: [comprasPage]
})
export class comprasPageModule {}
