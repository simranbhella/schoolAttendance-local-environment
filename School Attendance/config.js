import firebase from 'firebase';
//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyATwImDP13FVisbXvAio4qfogZ6HHz10Rk",
  authDomain: "school-attendance-50abf.firebaseapp.com",
  projectId: "school-attendance-50abf",
  storageBucket: "school-attendance-50abf.appspot.com",
  messagingSenderId: "662658173876",
  appId: "1:662658173876:web:355375c6c93a61f2d8c0e1"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 
