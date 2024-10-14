import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsGalleryPagePage } from './projects-gallery-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsGalleryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsGalleryPagePageRoutingModule {}
