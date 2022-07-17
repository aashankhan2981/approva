import React, { useState, useEffect, createContext } from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged, User } from "firebase/auth";

export const AuthenticationContext:React.Context<User|null> = createContext(null);

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser]:[User|null,React.Dispatch<User|null>] = useState(null);
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                localStorage.setItem("user", JSON.stringify(user))
            } else {
                setUser(null)
                localStorage.removeItem("user")
            }
        })

        if(!user){
             const user_from_storage= localStorage.getItem("user");
             user_from_storage && setUser(JSON.parse(user_from_storage))
        }
        return unsbscribe;
    }, [])
    
    return (
        <AuthenticationContext.Provider value={user} >
            {children}
        </AuthenticationContext.Provider>
    )
}