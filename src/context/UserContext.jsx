import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

console.log("usercontext    1")
export const UserContext =  createContext();

console.log("usercontext    2")

export const UserProvider = ({children}) => {
    console.log("usercontext    3")
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);

    // const token = localStorage.getItem('authToken');
    // if(token){
    //     setUser(token);
    // }

    const isLogged = () => {
        // if(user) return true;
        // return false;
        console.log("2 isLogged()");
        // if(!user) return false;
        const token = localStorage.getItem('authToken');
        if(!token){
            setUser(null);
            return false;
        }
        const u = jwtDecode(token);
        setUser(token);
        setUsername(u.username);
        // login time pe hi backend se aayi value user me set kar denge. toh iski jarurat nahi hai 
        // const {username, id} = jwtDecode(token);
        
        return true;
    }

    const Logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    }

    // useEffect(() => isLogged , [user]); 

    return (
        // <UserContext.Provider value={{ user, setUser, usrname, setUsrname, isLogged }} >
        <UserContext.Provider value={{ user, setUser, username, isLogged, Logout }} >
            {children}
        </UserContext.Provider>
    )
}