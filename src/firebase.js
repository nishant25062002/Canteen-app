import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLJZBe4hZOfClxo0XsNgCjpT8ACNBMWc",
  authDomain: "canteens-order.firebaseapp.com",
  projectId: "canteens-order",
  storageBucket: "canteens-order.appspot.com",
  messagingSenderId: "982493026639",
  appId: "1:982493026639:web:c62131b51bc9c955c7cd3a",
  measurementId: "G-0BR3BS725C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, storage, provider };

export default db;
