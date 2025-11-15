import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const authContext = createContext();
const AuthProvider = ({route}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth ,googleProvider)
    }
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () => {
        signOut(auth)
    }
    const authInfo = {
        handleGoogleSignIn,
        handleRegister,
        handleLogin,
        handleSignOut,
        user,
        loading
    }
    useEffect(() => {
        const unsubs = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubs();
    },[])
    return (
        <authContext.Provider value={authInfo}>
            {
                route
            }            
        </authContext.Provider>
    );
};

export default AuthProvider;