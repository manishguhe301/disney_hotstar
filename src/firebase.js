import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBr13jsus3fXzm24Ik6mGib2A49BvZhT3s',
  authDomain: 'disneyplus-clone-ea867.firebaseapp.com',
  projectId: 'disneyplus-clone-ea867',
  storageBucket: 'disneyplus-clone-ea867.appspot.com',
  messagingSenderId: '939302122394',
  appId: '1:939302122394:web:e48e0731f729ea882a8023',
  measurementId: 'G-TKTW4T68QT',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };
