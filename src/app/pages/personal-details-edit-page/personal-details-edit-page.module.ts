import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailsEditPagePageRoutingModule } from './personal-details-edit-page-routing.module';

import { PersonalDetailsEditPagePage } from './personal-details-edit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailsEditPagePageRoutingModule
  ],
  declarations: [PersonalDetailsEditPagePage]
})
export class PersonalDetailsEditPagePageModule {}
