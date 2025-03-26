import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const {username} = useParams();
  console.log("username", username);
  
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/users/profile/${username}/posts`,{
        method:"GET"
      }
    );

    const data = await response.json();
    setPost(data);
  }

  return (
    <div>
      Profile
      <p>{username}</p>
      <button onClick={fetchPost}>fetch all post</button>
      <div className="">POST</div>
      {/* <ul>
        {post.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul> */}
      {post}
    </div>
  );
}

export default Profile