import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info = InfoPage;
  fav = FavPage;

  depas = [
    {nombre: "Condominio de lujo", precio:"$6,150,000.00", img:"../assets/imgs/depa1.jpg", cuartos:"Tres recamaras", ubicacion:"Guadalajara, Colomos Providencia"},
    {nombre: "La Casa de tus sueños", precio:"$1,735,000.00", img:"../assets/imgs/depa2.jpg", cuartos:"Tres recamaras", ubicacion:"Tabachines, Altamira"},
    {nombre: "BUSCAS CASA?", precio:"$1,335,000.00", img:"../assets/imgs/depa3.jpg", cuartos:"Tres recamaras", ubicacion:"Zapopan, Bugambilias"},
    {nombre: "6 CASAS UBICADAS", precio:"$3,420,666.69", img:"../assets/imgs/depa4.jpg", cuartos:"Cuatro recamaras", ubicacion:"Colon Industrial, Goa 1583"},
    {nombre: "Oficinas en renta amuebladas", precio:"$4,100.00", img:"../assets/imgs/depa5.jpg", cuartos:"Cuatro recamaras", ubicacion:"Guadalajara, Providencia"},
    {nombre: "BUSCAS UN ESPACIO EJECUTIVO", precio:"$4,500.00 × Mes", img:"../assets/imgs/depa6.jpeg", cuartos:"7 recamaras", ubicacion:"Guadalajara, Americana"},
    {nombre: "VENDO CASA", precio:"$1,600,000.00", img:"../assets/imgs/depa7.jpg", cuartos:"4 recamaras", ubicacion:"Barrio Santa Tere"},
    {nombre: "Barrio Analco", precio:"$3,900,000.00", img:"../assets/imgs/depa8.jpg", cuartos:"5 recamaras", ubicacion:"Barrio Analco, Guadalajara"},
    {nombre: "Verde Valle", precio:"$9,000.00 × Mes", img:"../assets/imgs/depa9.jpeg", cuartos:"3 recamaras", ubicacion:"Guadalajara, Verde Valle"},
    {nombre: "Atencion Inversionistas ", precio:"$14,490,000.00", img:"../assets/imgs/depa10.jpg", cuartos:"4 recamaras", ubicacion:"Zapopan, Puerta de Hierro"}
  ];

  Fav=[];

  constructor(public navCtrl: NavController) {

  }
  clickDepa(depa){
    this.navCtrl.push(this.info, {Casa: depa, Fav: this.Fav});
  }
  clickFav(){
    this.navCtrl.push(this.fav, {Fav: this.Fav});
  }
}
