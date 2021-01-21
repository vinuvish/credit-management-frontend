import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDAaSmKWIr31yGLzbuUJ32Ug-MJtyUNx5I",
  authDomain: "credit-management-system-788b9.firebaseapp.com",
  projectId: "credit-management-system-788b9",
  storageBucket: "credit-management-system-788b9.appspot.com",
  messagingSenderId: "744281242064",
  appId: "1:744281242064:web:1ee74adc7d0e5dec10e1d5",
  measurementId: 'G-CMDCGN270N'
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firebase as fireFirebase, firestore as fireFirestore, auth as fireAuth };
