import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-camerapage',
  templateUrl: './camerapage.page.html',
  styleUrls: ['./camerapage.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CamerapagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async takePicture () {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };
}
