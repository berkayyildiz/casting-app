import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-send-audition-page',
  templateUrl: './send-audition-page.page.html',
  styleUrls: ['./send-audition-page.page.scss'],
})
export class SendAuditionPagePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);

      // You can process the file here, such as uploading it to a server.
    }
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
