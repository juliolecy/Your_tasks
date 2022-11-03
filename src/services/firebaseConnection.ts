import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBBxhE1-4RKMvLuv0RWEWwbylodafrxPB8",
  authDomain: "jlins-your-tasks.firebaseapp.com",
  projectId: "jlins-your-tasks",
  storageBucket: "jlins-your-tasks.appspot.com",
  messagingSenderId: "185205095078",
  appId: "1:185205095078:web:c62eb70a48312f71919267"
};

   if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
   }

   export default firebase;
