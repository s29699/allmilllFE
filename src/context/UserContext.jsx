import { createContext, useEffect, useState } from "react";

export const UserContext =  createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const isLogged = () => {
        if(user) return true;
        return false;
    }

    useEffect(() => isLogged , [user]); 

    return (
        <UserContext.Provider value={{ user, setUser, isLogged }} >
            {children}
        </UserContext.Provider>
    )
}