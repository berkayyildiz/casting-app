import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPagePage } from './notifications-page.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPagePageRoutingModule {}
