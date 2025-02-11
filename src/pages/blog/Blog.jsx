import React, { useRef} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Blog() {

  // const navigate = useNavigate();
  const navigate = useNavigate()
  const postRef = useRef();
  
  const searchPosts = async () => {
    console.log("from create post function");
    const searchInput = postRef.current.value;

    const response = await fetch("http://localhost:7000/api/v1/posts/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchInput }),
    });

    if(response){
      const data =await response.json();
      const slug = data.post.slug;
      navigate(`/blog/${slug}`)
    }
    console.log("response: ", response);
  }

  
  return (
    <div>
      <input
        className="mx-2 p-2"
        ref={postRef}
        type="text"
        placeholder="Search post based on title"
      />
      <button className="border-2 px-4" onClick={searchPosts}>
        Search
      </button>
      
      <button className="mx-8 border-2 px-4">
        <Link to="allpost"> All Post</Link>
      </button>
      <button className="border-2 px-4">
        <Link to="create"> Create Post </Link>
      </button>
      
      <Outlet />

    </div>
  );
}

export default Blog