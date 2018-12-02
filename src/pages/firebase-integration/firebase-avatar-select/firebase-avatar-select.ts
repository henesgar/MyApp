import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FirebaseService } from '../firebase-integration.service';

@Component({
  selector: 'firebase-avatar-select-page',
  templateUrl: 'firebase-avatar-select.html'
})
export class FirebaseAvatarSelect {

  avatars: Array<any>;

  constructor(
    public viewCtrl: ViewController,
    public firebaseService: FirebaseService
  ){}

  ionViewWillLoad(){
    this.getData();
  }

  getData(){
    this.firebaseService.getAvatars()
    .then(data => {
      this.avatars = data;
    })
  }

  close(avatar) {
    this.viewCtrl.dismiss(avatar.link);
  }

}
