import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../../Firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    // * google login
    const loginWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // * github login
    const loginWithGithub = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // * email sign up
    const signUpHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // * log in
    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // * sign out
    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => { 
            unSubscribe();
        }
    }, [])

    const authInfo = {user, loginWithGoogle, loginWithEmailAndPass, signUpHandler, loginWithGithub, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;