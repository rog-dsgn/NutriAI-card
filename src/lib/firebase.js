import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQd8AQixe1TU4KnMbrSrJ3ykO1kyta7Yg",
  authDomain: "nutri-ai-f1691.firebaseapp.com",
  databaseURL: "https://nutri-ai-f1691-default-rtdb.firebaseio.com",
  projectId: "nutri-ai-f1691",
  storageBucket: "nutri-ai-f1691.firebasestorage.app",
  messagingSenderId: "1054351251897",
  appId: "1:1054351251897:web:9f9d4edd8aecdcf4e97e68",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
