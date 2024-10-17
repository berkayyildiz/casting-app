import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.page.html',
  styleUrls: ['./confirmation-page.page.scss'],
})
export class ConfirmationPagePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async onClickCancel() {
    await this.modalCtrl.dismiss(false);
  }

  async onClickConfirm() {
    await this.modalCtrl.dismiss(true);
  }
}
