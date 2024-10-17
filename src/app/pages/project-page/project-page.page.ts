import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ConfirmationPagePage } from '../confirmation-page/confirmation-page.page';
import { SendAuditionPagePage } from '../send-audition-page/send-audition-page.page';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.page.html',
  styleUrls: ['./project-page.page.scss'],
})
export class ProjectPagePage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConfirmationPagePage,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data);

    if (data === false) {
      this.toastCtrl
        .create({
          message: 'Devam etmek için sözleşmeyi onaylamalısınız',
          duration: 2000,
          color: 'danger',
        })
        .then((toast) => {
          setTimeout(() => {
            toast.present();
          }, 300);
        });
    } else {
      const modal = await this.modalCtrl.create({
        component: SendAuditionPagePage,
        breakpoints: [0, 1],
        initialBreakpoint: 1,
      });

      modal.present();
    }
  }
}
