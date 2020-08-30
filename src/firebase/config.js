import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAu36fKFxzjnGjoUZibKCWeWFZVN5Gs8EI",
    authDomain: "test-project-bb0fb.firebaseapp.com",
    databaseURL: "https://test-project-bb0fb.firebaseio.com",
    projectId: "test-project-bb0fb",
    storageBucket: "test-project-bb0fb.appspot.com",
    messagingSenderId: "900813338389",
    appId: "1:900813338389:web:96e4f81996b3d6cae95b1c",
    measurementId: "G-KEDW0DJGJN"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase