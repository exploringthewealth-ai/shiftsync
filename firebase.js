// ============================================================
//  STEP 1: Replace the values below with YOUR Firebase config
//  (You will get these from Firebase Console - see instructions)
// ============================================================

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo2F8ZpcJK-DoFZdpGe26tzsUTlyTbiiY",
  authDomain: "shiftsync-7e5e8.firebaseapp.com",
  projectId: "shiftsync-7e5e8",
  storageBucket: "shiftsync-7e5e8.firebasestorage.app",
  messagingSenderId: "1046433784725",
  appId: "1:1046433784725:web:ba0404a634629308a00c9c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
