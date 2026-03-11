import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkcdJCF8T9-CERRoeJU0HxJZktoALqkTs",
  authDomain: "portafolio-efbe3.firebaseapp.com",
  projectId: "portafolio-efbe3",
  storageBucket: "portafolio-efbe3.firebasestorage.app",
  messagingSenderId: "226871032840",
  appId: "1:226871032840:web:e527b076a23c3c507de5bd"
};

// Inicializamos la App
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos
export const db = getFirestore(app);