// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9wmBryiA-o7keDZI8DdGchxLI-4wZoUI",
  authDomain: "celine-zhou-game-dev-porfolio.firebaseapp.com",
  projectId: "celine-zhou-game-dev-porfolio",
  storageBucket: "celine-zhou-game-dev-porfolio.appspot.com",
  messagingSenderId: "593965352219",
  appId: "1:593965352219:web:3e856a93e63efb3a347fbe",
  measurementId: "G-2RGTGNQP8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);