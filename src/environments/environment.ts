// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
   apiURL:'http://localhost:49347/api',
  firebase: {
    apiKey: "AIzaSyDJ0I6Nu7J3wlns9EWmKIEMNuR_pVKmwaY",
    authDomain: "mtk-delivery.firebaseapp.com",
    projectId: "mtk-delivery",
    storageBucket: "mtk-delivery.appspot.com",
    messagingSenderId: "683827920990",
    appId: "1:683827920990:web:014c718f855977b94eb4cf",
    measurementId: "G-H6XJDHS7VQ"
    // apiKey: "AIzaSyCjZG7ESEcrtKMZ1vc6kW074WRqkqwc0lQ",
    // authDomain: "hadimdelivery.firebaseapp.com",
    // projectId: "hadimdelivery",
    // storageBucket: "hadimdelivery.appspot.com",
    // messagingSenderId: "221442701952",
    // appId: "1:221442701952:web:e051ca4fb7ba05e7eac465",
    // measurementId: "G-3NQ78G55K0"
    
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
