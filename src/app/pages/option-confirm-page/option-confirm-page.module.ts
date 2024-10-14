import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionConfirmPagePageRoutingModule } from './option-confirm-page-routing.module';

import { OptionConfirmPagePage } from './option-confirm-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionConfirmPagePageRoutingModule
  ],
  declarations: [OptionConfirmPagePage]
})
export class OptionConfirmPagePageModule {}
