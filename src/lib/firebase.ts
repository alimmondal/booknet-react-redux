import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDGwRK1f6muIbF9v7pz3hUB8usVy36647o',
  authDomain: 'technet-e69e9.firebaseapp.com',
  projectId: 'technet-e69e9',
  storageBucket: 'technet-e69e9.appspot.com',
  messagingSenderId: '26127891787',
  appId: '1:26127891787:web:6a3770a1de1d903e1afcce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
