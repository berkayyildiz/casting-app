import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectPagePage } from '../project-page/project-page.page';

@Component({
  selector: 'app-option-confirm-page',
  templateUrl: './option-confirm-page.page.html',
  styleUrls: ['./option-confirm-page.page.scss'],
})
export class OptionConfirmPagePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openProject() {
    const modal = await this.modalCtrl.create({
      component: ProjectPagePage,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  isAvailableAllDates: null | boolean = null;
  isBudgetConfirmed = false;
}
