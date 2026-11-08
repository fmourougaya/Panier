// Copiez ici la configuration de votre application web Firebase
// (console Firebase > Paramètres du projet > Vos applications > Configuration du SDK).
// Tant que les valeurs contiennent "REMPLACER", l'appli reste purement locale.
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBL2rqeb2c1A9tMd6tOukKdVy0cOBBQW1w",

  authDomain: "panierlist.firebaseapp.com",

  projectId: "panierlist",

  storageBucket: "panierlist.firebasestorage.app",

  messagingSenderId: "711522012611",

  appId: "1:711522012611:web:50d302492dc5fc49e5c176"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
