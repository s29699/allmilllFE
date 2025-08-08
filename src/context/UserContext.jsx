import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext =  createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const [usrname, setUsrname] = useState(null);

    const isLogged = () => {
        // if(user) return true;
        // return false;
        console.log("2");
        const token = localStorage.getItem('authToken');
        if(!token){
            setUser(null);
            return false;
        }
        setUser(token);
        // login time pe hi backend se aayi value user me set kar denge. toh iski jarurat nahi hai 
        // const {username, id} = jwtDecode(token);
        
        return true;
    }

    const Logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    }

    useEffect(() => isLogged , [user]); 

    return (
        // <UserContext.Provider value={{ user, setUser, usrname, setUsrname, isLogged }} >
        <UserContext.Provider value={{ user, setUser, isLogged, Logout }} >
            {children}
        </UserContext.Provider>
    )
}