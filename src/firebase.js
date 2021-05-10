import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAZI-FnI5BHxFXQps173vYZIY3e_bkFeOs",
    authDomain: "airbnb-clone-cc2b4.firebaseapp.com",
    projectId: "airbnb-clone-cc2b4",
    storageBucket: "airbnb-clone-cc2b4.appspot.com",
    messagingSenderId: "444172343506",
    appId: "1:444172343506:web:5bfe05c5b981f310a2f50b",
    measurementId: "G-HFNXMW1QFJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
