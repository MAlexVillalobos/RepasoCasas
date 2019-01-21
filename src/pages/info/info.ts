import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavPage } from '../fav/fav';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  casa = {};
  Fav = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa = this.navParams.get('Casa');
    this.Fav = this.navParams.get('Fav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  clickAddF(){
    this.Fav.push(this.casa);
  }

}
