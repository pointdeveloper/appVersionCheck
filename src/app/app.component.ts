import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AppVersion } from '@ionic-native/app-version';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private appVersion: AppVersion) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.appVersion.getPackageName().then((value) => {
        console.log(value); //2296933d8dceabb95a29c106f8c4543f
        console.log(Md5.hashStr(value)); //2296933d8dceabb95a29c106f8c4543f
        if(Md5.hashStr(value).toString()=="ad3aae7c04385738f7b618ae900bbe18"){
        // if (value == "io.ionic.starter") {
          console.log("matched");
          statusBar.styleDefault();
          splashScreen.hide();
        } else {
         console.log("Not matched");
          // platform.exitApp();
        }
      })
    });
  }
  //  ngOnInit(){
  //    //called after the constructor and called  after the first ngOnChanges()
  //     this.platform.ready().then(() => { 
  //     this.appVersion.getPackageName().then((value) => {
  //       console.log(Md5.hashStr(value)); //2296933d8dceabb95a29c106f8c4543f //121ee7cd32993f7f8585a64948eeebce
  //       if(Md5.hashStr(value).toString()=="2296933d8dceabb95a29c106f8c4543f"){
  //       // if (value == "io.ionic.starter") {
  //        console.log("matched");
         
  //       } else {
  //         this.platform .exitApp();
  //       }
  //     })
  //   });
  // }
}

