import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';


function Profile() {
  // const {username} = useParams();
  // console.log("username", username);
  
  const {usrname} = useContext(UserContext);
  console.log("usrname", usrname);

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/users/profile/${usrname}/posts`,{
        method:"GET"
      }
    );

    const data = await response.json();
    console.log("data", data);  
    setPosts(data.post);
    console.log(typeof(data.post));
    console.log("post", data.post);
  }

  return (
    <div>
      Profile
      <p>{usrname}</p>
      <button onClick={fetchPost}>fetch all post</button>
      <div className="">POST</div>
      <ul>
        {Array.isArray(posts) && posts?.map((p) => (
          <li key={p._id}>{p.title}</li>
        ))}
      </ul>
      {/* {posts && <div>aaya</div>}
      {posts && <div>{posts}</div>} */}
    </div>
  );
}

export default Profile