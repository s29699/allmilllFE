import React, { useContext, useRef } from 'react'
import { UserContext } from '../../context/UserContext';

function Login() {

    const unRef = useRef(null);
    const passRef = useRef(null);
    const {setUser, setUsrname } = useContext(UserContext);
    
    const handleLogin = async () => {
        const username = unRef.current.value;
        const password = passRef.current.value;

        const response = await fetch(
          "http://localhost:7000/api/v1/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }
        );
        console.log("response: ", response);
        if(response){
            const val = await response.json();
            unRef.current.value = '';
            passRef.current.value = '';
            console.log("response.data: ", val.data);
            localStorage.setItem('authToken',val.data);
            setUser(val);
            setUsrname(username);
        }
        
    }

  return (
    <div className='m-8'>
        <h3>Login</h3>
        <input ref={unRef} type="text" placeholder='username' />
        <input ref={passRef} type="text" placeholder='password' />
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login