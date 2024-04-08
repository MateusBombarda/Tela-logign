
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getAuth} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_eK00JmdHe4Gr3g5sxToWWmkTL-p_Zas",
    authDomain: "eventx-17072.firebaseapp.com",
    projectId: "eventx-17072",
    storageBucket: "eventx-17072.appspot.com",
    messagingSenderId: "982267128256",
    appId: "1:982267128256:web:23501ecde1423c67124025",
    measurementId: "G-0YRG0WR6GC"
  };



const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)

});

export {auth};  
