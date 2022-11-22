import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkraBqGVbyZhSQBljQ8IZBaehaXYYR7rM",
  authDomain: "brakkacinema.firebaseapp.com",
  projectId: "brakkacinema",
  storageBucket: "brakkacinema.appspot.com",
  messagingSenderId: "130740860241",
  appId: "1:130740860241:web:d2956852c22719ad9dcf70",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
