import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCArq-g39-YTib83OyNanA0VLeIiWDQw2s',
  authDomain: 'ctracker-c31e8.firebaseapp.com',
  databaseURL: 'https://ctracker-c31e8.firebaseio.com',
  projectId: 'ctracker-c31e8',
  storageBucket: 'ctracker-c31e8.appspot.com',
  messagingSenderId: '157230959143',
  appId: '1:157230959143:web:32fbcca91bf3d78d8ddc02',
  measurementId: 'G-CMDCGN270N'
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firebase as fireFirebase, firestore as fireFirestore, auth as fireAuth };
