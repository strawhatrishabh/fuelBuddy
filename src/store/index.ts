import { defineStore } from 'pinia'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF7wWeNnzGbzUAZYgGY7ME53IIP51HaHA",
    authDomain: "fuelbuddy-a2670.firebaseapp.com",
    projectId: "fuelbuddy-a2670",
    storageBucket: "fuelbuddy-a2670.appspot.com",
    messagingSenderId: "668857539492",
    appId: "1:668857539492:web:1f6284b8cbda107b0a3f31",
    measurementId: "G-ME9VRS04HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            name: '',
            username: '',
            password: '',
            validInput: false,
            screenLoader: false,
            loggedUser: ''
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async createFirebaseUser() {
            this.screenLoader = true;
            const auth = getAuth();
            var that = this;
            await createUserWithEmailAndPassword(auth, this.username, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    that.loggedUser = user.email;
                    return that.loggedUser
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                }).finally(() => {
                    this.screenLoader = false
                });
        },
        async authenticateFirebase() {
            this.screenLoader = true
            const auth = getAuth();
            var that = this;
            await signInWithEmailAndPassword(auth, this.username, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    that.loggedUser = user.email;
                    return that.loggedUser
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
                .finally(() => {
                    this.screenLoader = false
                })
        }
    },
})