import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0aQKPbm-XDmNfvENB1jubnZ0CeBOmZLY",
  authDomain: "crewlifesolution.firebaseapp.com",
  databaseURL: "https://crewlifesolution-default-rtdb.firebaseio.com",
  projectId: "crewlifesolution",
  storageBucket: "crewlifesolution.firebasestorage.app",
  messagingSenderId: "1084193145018",
  appId: "1:1084193145018:web:006ba1f6bd271d22884283"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };