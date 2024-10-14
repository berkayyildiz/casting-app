import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { PersonalDetailsEditPagePage } from '../personal-details-edit-page/personal-details-edit-page.page';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage {
  message =
    'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PersonalDetailsEditPagePage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
