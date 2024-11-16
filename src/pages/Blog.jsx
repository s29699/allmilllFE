import React, { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Blog() {
  const postRef = useRef();
  const getAllPost = async () => {
    // const response = await fetch("http://localhost:7000/api/v1/users/login");
    console.log("from get all post function");
  }

  const searchPosts = async () => {
    console.log("from create post function");
    const searchInput = postRef.current.value;

    const response = fetch("http://localhost:7000/api/v1/posts/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchInput }),
    });

    console.log("response: ", response);
  }

  return (
    <div>
      <h3>Blog</h3>
      <input
        ref={postRef}
        type="text"
        placeholder="Search post based on title"
      />
      <button onClick={searchPosts} >Search</button>
      <button>
        <Link to="allpost"> All Post </Link>
      </button>
      <button>
        <Link to="create"> Create Post </Link>
      </button>

      <Outlet />
    </div>
  );
}

export default Blog