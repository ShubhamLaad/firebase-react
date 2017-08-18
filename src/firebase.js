import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDproLW8Gh3E8KaM4OJfpEuPrJ7umXUSes",
  authDomain: "fir-react-e13bd.firebaseapp.com",
  databaseURL: "https://fir-react-e13bd.firebaseio.com",
  projectId: "fir-react-e13bd",
  storageBucket: "fir-react-e13bd.appspot.com",
  messagingSenderId: "1032327793208"
};

firebase.initializeApp(config);

export default firebase;
