import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  acessar(){
<<<<<<< HEAD
    this.navCtrl.push(HomePage);
  }

=======
    this.navCtrl.push(HomePage)
  }
>>>>>>> 321a05c38a3c5ad8ef3800a6657e595705c5260a
}
