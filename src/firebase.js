import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC_A_6VzR0PVTvt1F0EiPDeIx36qCT6iac',
  authDomain: 'testing-34a16.firebaseapp.com',
  databaseURL: 'https://testing-34a16.firebaseio.com',
  projectId: 'testing-34a16',
  storageBucket: 'testing-34a16.appspot.com',
  messagingSenderId: '691214925536',
  appId: '1:691214925536:web:2e6971f791f99dc4e59a85',
  measurementId: 'G-KKXBJNC04T'
};

firebase.initializeApp(config);
export default firebase;
