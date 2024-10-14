import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsGalleryPagePageRoutingModule } from './projects-gallery-page-routing.module';

import { ProjectsGalleryPagePage } from './projects-gallery-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsGalleryPagePageRoutingModule
  ],
  declarations: [ProjectsGalleryPagePage]
})
export class ProjectsGalleryPagePageModule {}
