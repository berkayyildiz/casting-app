import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionConfirmPagePage } from '../option-confirm-page/option-confirm-page.page';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.page.html',
  styleUrls: ['./notifications-page.page.scss'],
})
export class NotificationsPagePage {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: OptionConfirmPagePage,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
