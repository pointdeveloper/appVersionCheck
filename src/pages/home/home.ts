import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private appVersion: AppVersion) {

  }
  version() {
    console.log(this.appVersion.getAppName());

  }
  package() {
    console.log(this.appVersion.getPackageName());

  }
  versionCode() {
    console.log(this.appVersion.getVersionCode());
  }
  versionNumber() {
    console.log(this.appVersion.getVersionNumber());
  }
}
