import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDuvYv7NIsCGI2L5YS2oR0KNdSWiEQ-pTs',
  authDomain: 'industry-monitoring-b6e63.firebaseapp.com',
  databaseURL: 'https://industry-monitoring-b6e63-default-rtdb.firebaseio.com',
  projectId: 'industry-monitoring-b6e63',
  storageBucket: 'industry-monitoring-b6e63.appspot.com',
  messagingSenderId: '652790217924',
  appId: '1:652790217924:web:1b7328413e5c809e999d91',
  measurementId: 'G-50790T3FYW',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
