import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config.ts'
import { GoogleAuthProvider, createUserWithEmailAndPassword, UserCredential, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
import axios from 'axios';

type authentication = {
        email: string;
        name: string;
        photo: string;
}

type exportData = {
        createUser: (email: string, password: string) => Promise<UserCredential>;
        updateUserProfile: (name: string, photo: string) => Promise<void>;
        loginUser: (email: string, password: string) => Promise<UserCredential>;
        user: authentication | null;
        logOut: () => Promise<void>;
}

export const AuthContext = createContext<exportData | null>(null);

type contextProps = {
        children: React.ReactNode
}

const AuthProvider = ({ children }: contextProps) => {

        const [user, setUser] = useState<authentication | null>(null);
        const [loading, setLoading] = useState(true);

        const googleProvider = new GoogleAuthProvider();

        const createUser = (email: string, password: string) => {
                setLoading(true);
                return createUserWithEmailAndPassword(auth, email, password);
        }

        const loginUser = (email: string, password: string) => {
                setLoading(true);
                return signInWithEmailAndPassword(auth, email, password);
        }
        const updateUserProfile = (name: string, photo: string) => {
                const currentUser = auth.currentUser;
                if (currentUser) {
                        return updateProfile(currentUser, {
                                displayName: name,
                                photoURL: photo,
                        });
                }
                else {
                        return Promise.reject(new Error("User is not logged in."));
                }
        }

        const googleLogin = () => {
                setLoading(true);
                return signInWithPopup(auth, googleProvider);
        }

        const logOut = () => {
                setLoading(true);
                return signOut(auth);
        }

        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, currentUser => {
                        if (currentUser) {
                                const { email, displayName, photoURL } = currentUser;
                                const user: authentication = {
                                        email: email || '',
                                        name: displayName || '',
                                        photo: photoURL || '',
                                };
                                setUser(user);


                                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                                        .then(data => {
                                                localStorage.setItem('access-token', data.data.token);
                                                setLoading(false);
                                        })
                        }
                        else {
                                localStorage.removeItem('access-token');
                                setUser(null);
                        }
                });

                return () => unsubscribe();
        }, [])

        const authInfo = {
                createUser,
                updateUserProfile,
                loginUser,
                logOut,
                googleLogin,
                loading,
                user
        }

        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;