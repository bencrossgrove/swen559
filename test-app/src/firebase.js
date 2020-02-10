import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAj1l42bYZUAJmxtiJv6WUoSSNLyWwrLp4',
  authDomain: 'swen-559.firebaseapp.com',
  databaseURL: 'https://swen-559.firebaseio.com',
  projectId: 'swen-559',
  storageBucket: 'swen-559.appspot.com',
  messagingSenderId: '1018085688552',
  appId: '1:1018085688552:web:ea001ae3a6376a4621755d',
  measurementId: 'G-0EVZ7DDPK3'
}

firebase.initializeApp(config)
export default firebase
