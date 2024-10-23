// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBmIBUxUgBFI-qOzyk_hKTgdc_29mGObBM",

  authDomain: "webappsec-bcce4.firebaseapp.com",

  projectId: "webappsec-bcce4",

  storageBucket: "webappsec-bcce4.appspot.com",

  messagingSenderId: "9828228081",

  appId: "1:9828228081:web:683043d04f3ee9dd0ac250",

  measurementId: "G-7BYT4MWL2L"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);