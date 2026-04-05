// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const remoteConfig = getRemoteConfig(app)

remoteConfig.settings = {
  minimumFetchIntervalMillis: 60000,
}

remoteConfig.defaultConfig = {
  example_flag: false,
}

export { fetchAndActivate, getValue }