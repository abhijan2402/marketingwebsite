import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC5o3sNOx8G4roTvipTN93EZz1_l6xrm34",
    authDomain: "marketing-agency-474b8.firebaseapp.com",
    projectId: "marketing-agency-474b8",
    storageBucket: "marketing-agency-474b8.appspot.com",
    messagingSenderId: "1076966526160",
    appId: "1:1076966526160:web:075ec28b4432f4e45762d5",
    measurementId: "G-3N4SKW3MVW"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);