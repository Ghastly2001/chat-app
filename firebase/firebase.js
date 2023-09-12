import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5LOCXGTEJJF0zxb7QJKmC_1_ACXJ09TY",
    authDomain: "fir-chat-app-78da8.firebaseapp.com",
    projectId: "fir-chat-app-78da8",
    storageBucket: "fir-chat-app-78da8.appspot.com",
    messagingSenderId: "312509748152",
    appId: "1:312509748152:web:3f2cf8bb205ef8e841354d"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
