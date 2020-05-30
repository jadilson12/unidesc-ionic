import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  config = {
    message: '',
    duration: 2000,
    color: '',
  };
  constructor(public toastController: ToastController) {}

  success(msg: string): void {
    this.config.message = msg;
    this.config.color = 'success';
    this.presentToast();
  }

  error(msg: string): void {
    this.config.message = msg;
    this.config.color = 'warning';
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create(this.config);
    toast.present();
  }
}
