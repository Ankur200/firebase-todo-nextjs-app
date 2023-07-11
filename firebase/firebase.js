
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBvHHUN175QnXal12J7GHxzwRTZlfRaq6E",
  authDomain: "fir-todo-app-90142.firebaseapp.com",
  projectId: "fir-todo-app-90142",
  storageBucket: "fir-todo-app-90142.appspot.com",
  messagingSenderId: "761707473624",
  appId: "1:761707473624:web:bd1f71882061731de745ad"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app);