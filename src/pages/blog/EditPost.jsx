import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function EditPost() {
  const location = useLocation();
  const {slug} = location.state;
  const [post, setPost] = useState({})

  console.log("slug in EditPost: ", slug);
  const getPost = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/posts/display/${slug}`,{
        method:"GET"
      }
    );
    const data = await response.json();
    setPost(data);
    console.log("data: ", data.post);
  }

  useEffect(() => {
    getPost()
  } ,[])

  return (
    <div>
      <h3>Edit Post</h3>
      <input className='border-2 mx-2' type="text" placeholder={post.title} />
      <input className='border-2 mx-2' type="text" placeholder='description in EditPost' />
      <button>Save Changes</button>
    </div>
  )
}

export default EditPost