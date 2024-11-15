import React, { useRef } from 'react'

function Createpost() {

    const titleRef = useRef();
    const desRef = useRef();    
    const token = localStorage.getItem('authToken');

    const handlePost = async () => {
        const title = titleRef.current.value;
        const description = desRef.current.value;
        console.log(title, description);
        const response = await fetch(
          "http://localhost:7000/api/v1/posts/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description }),
          }
        );

        if(response){
            titleRef.current.value ='';
            desRef.current.value ='';
            console.log(response);
        }
    }
  return (
    <div className='m-8'>
        <h3>Create Post</h3>
        <input ref={titleRef} type="text" placeholder='Title' />
        <input ref={desRef} type="text" placeholder='Description' />
        <button onClick={handlePost}>Submit</button>
    </div>
  )
}

export default Createpost