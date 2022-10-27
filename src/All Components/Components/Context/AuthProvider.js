import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../../Firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // * log in
    const loginWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // * sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // * user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth, profile);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => { 
            unSubscribe();
        }
    }, [])

    const authInfo = {user, loginWithGoogle, loginWithEmailAndPass, signUpHandler, loginWithGithub, logOut, updateUserProfile, loading, setLoading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;