import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  
  result:any;
  constructor(private router: Router) {}
  async showHelloToast() {
    await Toast.show({
      text: 'Hello!',
    });
  };
  goNext(){
    this.router.navigate(['/camerapage']);
  }
  async printCurrentPosition (){
    const coordinates = await Geolocation.getCurrentPosition();
   this.result=coordinates.coords.latitude + coordinates.coords.longitude;
    console.log('Current position:', coordinates);
  };
}
