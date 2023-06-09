import {AppRegistry} from 'react-native';
import {getFirebaseConfig} from './firebaseConfig'; // Replace with the path to your Firebase configuration file
import {initializeApp} from '@react-native-firebase/app';

initializeApp(getFirebaseConfig());

export const getFirebaseConfig = () => {
  return {
    apiKey: 'AIzaSyAF9uo-nrRbPdFRD2vS2OoSKPotSr09am4',
    authDomain: 'delivery-app-b198e.firebaseapp.com',
    projectId: 'delivery-app-b198e',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: '1:587209419740:android:7720fa9b3d7bc70fd9fd19',
  };
};
