import React, { useRef } from 'react'

function Signup() {
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const unRef = useRef(null);
    const passRef = useRef(null);

    const handleSignup = async () => {

        const email = emailRef.current.value;
        const fullName = nameRef.current.value;
        const username = unRef.current.value;
        const password = passRef.current.value;

        const response = await fetch(
          "http://localhost:7000/api/v1/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, fullName, username, password }),
          }
        );
        if(response){
            emailRef.current.value = '';
            nameRef.current.value = '';
            unRef.current.value = '';
            passRef.current.value = '';
        }
        console.log(response);
    }

  return (
    <div className='m-8 '>
        <h3>Signup</h3>
        <input ref={emailRef} type="text" placeholder='Email' />
        <input ref={nameRef} type="text" placeholder='Name' />
        <input ref={unRef} type="text" placeholder='Username' />
        <input ref={passRef} type="text" placeholder='Password' />
        <button onClick={handleSignup}>Submit</button>
    </div>
  )
}

export default Signup