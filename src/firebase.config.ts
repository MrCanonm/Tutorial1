// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyBxrqzaI-S6WypJRw6wjLnv9yz9HwZ_vWA',
  authDomain: 'tutorial-557a7.firebaseapp.com',
  projectId: 'tutorial-557a7',
  storageBucket: 'tutorial-557a7.appspot.com',
  messagingSenderId: '458717894614',
  appId: '1:458717894614:web:a5bf8106ab3d7e0c74f677',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
