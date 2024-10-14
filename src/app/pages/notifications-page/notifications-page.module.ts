import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPagePageRoutingModule } from './notifications-page-routing.module';

import { NotificationsPagePage } from './notifications-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPagePageRoutingModule
  ],
  declarations: [NotificationsPagePage]
})
export class NotificationsPagePageModule {}
