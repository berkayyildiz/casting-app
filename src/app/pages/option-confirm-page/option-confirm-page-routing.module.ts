import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionConfirmPagePage } from './option-confirm-page.page';

const routes: Routes = [
  {
    path: '',
    component: OptionConfirmPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionConfirmPagePageRoutingModule {}
