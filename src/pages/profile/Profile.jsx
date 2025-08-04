import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';


function Profile() {
  const {username} = useParams();
  console.log("username from params", username);
  
  // const {user} = useContext(UserContext);
  // console.log("usrname from context", user);

  const [posts, setPosts] = useState([]);
  const [tweets, setTweets] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/users/profile/${username}/posts`,{
        method:"GET"
      }
    );

    const data = await response.json();
    console.log("data", data);  
    setPosts(data.post);
    console.log(typeof(data.post));
    console.log("post", data.post);
  }

  const fetchdisc = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/users/profile/${username}/tweets`,{
        method:"GET"
      }
    );
    const data = await response.json();
    console.log("tweet data", data);
    setTweets(data.tweet);
  }

  return (
    <div>
      Profile
      <p>{username}</p>
      <div className='flex'>
        <button 
          onClick={fetchPost}
          className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400 mx-4">
            Post by {username}
        </button>
        <button 
          className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400"
          onClick={fetchdisc}>
            Discussion by {username}
        </button>
      </div>
      <ul>
        {Array.isArray(tweets) && tweets?.map((t) => (
          <li key={t._id}>{t.post}</li>
        ))}
      </ul>

      <ul>
        {Array.isArray(posts) && posts?.map((p) => (
          <li key={p._id}>{p.title}</li>
        ))}
      </ul>
      {/* you can't directly display an js object in react */}
      {/* {posts && <div>aaya</div>}
      {posts && <div>{posts}</div>} */}
    </div>
  );
}

export default Profile