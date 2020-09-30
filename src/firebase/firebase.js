import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDv60XVGaopLKF831m9-MVuRrtwqVkRDqc',
  authDomain: 'clone-8670a.firebaseapp.com',
  databaseURL: 'https://clone-8670a.firebaseio.com',
  projectId: 'clone-8670a',
  storageBucket: 'clone-8670a.appspot.com',
  messagingSenderId: '929218483051',
  appId: '1:929218483051:web:02cc5639b2daa9996c722e',
  measurementId: 'G-MMLKDSH7P9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
