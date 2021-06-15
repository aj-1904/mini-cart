import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIgOGSDD2BNdYA7FVVizRudh_bGEf5tSo",
  authDomain: "cart-7681c.firebaseapp.com",
  projectId: "cart-7681c",
  storageBucket: "cart-7681c.appspot.com",
  messagingSenderId: "348770681760",
  appId: "1:348770681760:web:e1a3eeec6cdfeceac5dac5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


