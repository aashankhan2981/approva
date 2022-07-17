import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

export const config = {
    apiKey: "AIzaSyBLJF_keIMv6swEDa8PQHf9tNk-JrSDIvk",
    authDomain: "approva-ac873.firebaseapp.com",
    projectId: "approva-ac873",
    storageBucket: "approva-ac873.appspot.com",
    messagingSenderId: "165874016922",
    appId: "1:165874016922:web:2ebf8f2d10fd3c48d2f523",
    measurementId: "G-LERF8HSXF4"
};

const app = initializeApp(config);
const auth = getAuth(app);
auth.useDeviceLanguage();
const db = getFirestore(app);

export {auth,db,app}
//export default app;