import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personal-details-edit-page',
  templateUrl: './personal-details-edit-page.page.html',
  styleUrls: ['./personal-details-edit-page.page.scss'],
})
export class PersonalDetailsEditPagePage {
  selectedSegment: string = 'info'; // Default selected segment

  // Define variables to hold form data
  birthDate: string;
  cityLived: string;
  gender: string;
  height: number;
  weight: number;
  dressSize: string;
  shoeSize: string;
  hairColor: string;
  hairStyle: string;
  beardType: string;
  skinType: string;

  constructor(private modalCtrl: ModalController) {
    // Initialize variables if necessary
    this.birthDate = '';
    this.cityLived = '';
    this.gender = '';
    this.height = 0;
    this.weight = 0;
    this.dressSize = '';
    this.shoeSize = '';
    this.hairColor = '';
    this.hairStyle = '';
    this.beardType = '';
    this.skinType = '';
  }

  // Method to handle form submission
  submitForm() {
    const formData = {
      birthDate: this.birthDate,
      cityLived: this.cityLived,
      gender: this.gender,
      height: this.height,
      weight: this.weight,
      dressSize: this.dressSize,
      shoeSize: this.shoeSize,
      hairColor: this.hairColor,
      hairStyle: this.hairStyle,
      beardType: this.beardType,
      skinType: this.skinType,
    };

    console.log('Form Data Submitted:', formData);
    // You can add further logic here, such as sending data to a server
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
