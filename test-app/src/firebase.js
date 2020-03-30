// import firebase from 'firebase'
// const config = {
//   apiKey: 'AIzaSyAj1l42bYZUAJmxtiJv6WUoSSNLyWwrLp4',
//   authDomain: 'swen-559.firebaseapp.com',
//   databaseURL: 'https://swen-559.firebaseio.com',
//   projectId: 'swen-559',
//   storageBucket: 'swen-559.appspot.com',
//   messagingSenderId: '1018085688552',
//   appId: '1:1018085688552:web:ea001ae3a6376a4621755d',
//   measurementId: 'G-0EVZ7DDPK3'
// }

import * as firebase from "firebase/app";
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAuOFPdzHdVX3xJCLCBJiFm7L2WUk1qUzs",
    authDomain: "swen559-lab.firebaseapp.com",
    databaseURL: "https://swen559-lab.firebaseio.com",
    projectId: "swen559-lab",
    storageBucket: "swen559-lab.appspot.com",
    messagingSenderId: "1057705006359",
    appId: "1:1057705006359:web:1946ae3b11dede06b41352",
    measurementId: "G-X1ZKGMS39N"
  };

// Initialize Firebase
firebase.initializeApp(config)

export default firebase
