import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {

  depas=[];
  info = InfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.depas = this.navParams.get('Fav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  clickDepa(depa){
    this.navCtrl.push(this.info, {Casa: depa, Fav: this.depas});
  }

}
