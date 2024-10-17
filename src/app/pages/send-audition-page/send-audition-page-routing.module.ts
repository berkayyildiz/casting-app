import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendAuditionPagePage } from './send-audition-page.page';

const routes: Routes = [
  {
    path: '',
    component: SendAuditionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendAuditionPagePageRoutingModule {}
