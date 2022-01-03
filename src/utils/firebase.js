import firebase from 'firebase/app';

 var firebaseConfig = {
    apiKey: "AIzaSyAmBLr_K7GoPEVQ-7JDlv8-0bw1nPk9l0c",
    authDomain: "pokemon-app-909c7.firebaseapp.com",
    projectId: "pokemon-app-909c7",
    storageBucket: "pokemon-app-909c7.appspot.com",
    messagingSenderId: "509792664349",
    appId: "1:509792664349:web:13a7a0fa0d88507668fff4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;