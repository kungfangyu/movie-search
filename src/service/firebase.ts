/*
 * @Author: Fangyu Kung
 * @Date: 2024-10-05 14:02:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-06 15:58:41
 * @FilePath: /movie-search/src/service/firebase.ts
 */
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface Movie {
  id: string;
  title: string;
  // 添加其他必要的电影属性
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKAHoDdHc82gwjU6KWrs5NW4vD1T1XZac",
  authDomain: "movie-search-1a35c.firebaseapp.com",
  projectId: "movie-search-1a35c",
  storageBucket: "movie-search-1a35c.appspot.com",
  messagingSenderId: "918588580282",
  appId: "1:918588580282:web:155a9381c77f2db82cfd83",
  measurementId: "G-LFMXXTC630",
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();
const auth = getAuth();

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export const addToWatchList = async (movie: Movie) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  await setDoc(doc(db, "watchList", user.uid, "movies", movie.id), movie);
};

export const getWatchList = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const snapshot = await getDoc(doc(db, "watchList", user.uid, "movies"));
  return snapshot.data();
};

export const removeFromWatchList = async (movieId: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  await deleteDoc(doc(db, "watchList", user.uid, "movies", movieId));
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
