Plugin Capacitor
@capacitor/geolocation
C:\capGeoLoc\CapGeoTest>
 

 
Install

•	ng build
•	ionic capacitor add android
•	ionic capacitor copy android
•	ionic capacitor run android
•	ionic capacitor open android
Plugin Install for GEO Location
npm install @capacitor/geolocation
npx cap sync

Permission for IOS and Android
Android
This API requires the following permissions be added to your AndroidManifest.xml:

<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />

iOS
Apple requires privacy descriptions to be specified in Info.plist for location information:
•	NSLocationWhenInUseUsageDescription (Privacy - Location When In Use Usage Description)
Read about Configuring Info.plist in the iOS Guide for more information on setting iOS permissions in Xcode
Doc Link : Geolocation Capacitor Plugin API | Ionic Documentation (ionicframework.com)

 

Do  not foget to give the appid
 

---------------------camera Access-----------------------
Capacitor Plugin
   

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
npm install @capacitor/camera
npx cap sync
iOS
iOS requires the following usage description be added and filled out for your app in Info.plist:
•	NSCameraUsageDescription (Privacy - Camera Usage Description)
•	NSPhotoLibraryAddUsageDescription (Privacy - Photo Library Additions Usage Description)
•	NSPhotoLibraryUsageDescription (Privacy - Photo Library Usage Description)
Read about Configuring Info.plist in the iOS Guide for more information on setting iOS permissions in Xcode
Doc link
Camera Capacitor Plugin API | Ionic Documentation (ionicframework.com)

Code 
 

Entire Doc
Toast Capacitor Plugin API | Ionic Documentation (ionicframework.com)

Geolocation - Supported Plugins (ionic.io)
C:\capGeoLoc\CapGeoTest>

Note: if you are plan to migrate from V3 to V7 then replace Cordova to capacitor.
Cordova support upto v5.
While developers can still use Cordova in the Ionic stack, the future is Ionic with Capacitor (or Capacitor on its own with any popular web stack!). These apps are known as Web Native apps, in contrast to the older hybrid approach.
