import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let height = '100%';
    setInterval(()=>{
      let row = document.getElementById('switching');
      row.style.height = height;

      if(height == '100%'){
        height = '50%'
      } else{
        height = '100%';
      }

    }, 1500);


  }



}
