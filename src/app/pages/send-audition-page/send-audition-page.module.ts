import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendAuditionPagePageRoutingModule } from './send-audition-page-routing.module';

import { SendAuditionPagePage } from './send-audition-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendAuditionPagePageRoutingModule
  ],
  declarations: [SendAuditionPagePage]
})
export class SendAuditionPagePageModule {}
