import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDetailsEditPagePage } from './personal-details-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalDetailsEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalDetailsEditPagePageRoutingModule {}
