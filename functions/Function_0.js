exports = async function(arg){
  
  //const fb = require('firebase');
  const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
  

const firebaseConfig = {
  apiKey: "AIzaSyAKBrTeGmSSyj6Rg37surQRshyfRn8t8dQ",
  authDomain: "memehub-server.firebaseapp.com",
  databaseURL: "https://memehub-server-default-rtdb.firebaseio.com",
  projectId: "memehub-server",
  storageBucket: "memehub-server.appspot.com",
  messagingSenderId: "696200336899",
  appId: "1:696200336899:web:6401e35efad652b677a036",
  measurementId: "G-TGND5FYYL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection($keys, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}



/*
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
*/
};