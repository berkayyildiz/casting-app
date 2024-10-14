import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Tab2Page } from 'src/app/tab2/tab2.page';

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
      component: Tab2Page,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
