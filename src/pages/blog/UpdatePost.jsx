import React, { useRef,useContext } from 'react'
import { UpdateContext } from '../../context/UpdateContext.jsx'
import { useNavigate } from 'react-router-dom';

function UpdatePost({slug}) {

    const navigate = useNavigate();
    const tref = useRef();
    const dref = useRef();
    const token = localStorage.getItem("authToken");
    const {putFalse} = useContext(UpdateContext);

    console.log("sluig: ", slug);
    const handleUpdate = async () => {
        const title = tref.current.value;
        const description = dref.current.value;

        const response = await fetch(
          `http://localhost:7000/api/v1/posts/update/${slug}`,
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
            putFalse();
            navigate("/blog/allpost")
        }
    }
    
  return (
    <div>
        <input ref={tref} type="text" placeholder='Updated title' />
        <input ref={dref} type="text" placeholder='Updated description' />
        <button onClick={handleUpdate}>Update Post</button>
    </div>
  )
}

export default UpdatePost