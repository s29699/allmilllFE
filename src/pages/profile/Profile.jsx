import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';


function Profile() {
  const {username} = useParams();
  console.log("username from params", username);
  
  // if(useParams()){}

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
    setTweets(null);
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
    setPosts(null);
  }

  // return (
  //   <div>
  //     Profile
  //     <p>{username}</p>
  //     <div className='flex'>
  //       <button 
  //         onClick={fetchPost}
  //         className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400 mx-4">
  //           Post by {username}
  //       </button>
  //       <button 
  //         className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400"
  //         onClick={fetchdisc}>
  //           Discussion by {username}
  //       </button>
  //     </div>
  //     <ul>
  //       {Array.isArray(tweets) && tweets?.map((t) => (
  //         <li key={t._id}>{t.post}</li>
  //       ))}
  //     </ul>

  //     <ul>
  //       {Array.isArray(posts) && posts?.map((p) => (
  //         <li key={p._id}>{p.title}</li>
  //       ))}
  //     </ul>
  //     {/* you can't directly display an js object in react */}
  //     {/* {posts && <div>aaya</div>}
  //     {posts && <div>{posts}</div>} */}
  //   </div>
  // );


    // return (
    //   <div className="min-h-screen bg-gray-100 flex justify-center p-6">
    //     <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-6">

    //       {/* Profile Header */}
    //       <div className="flex flex-col items-center mb-6">
    //         <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
    //           {username.charAt(0).toUpperCase()}
    //         </div>
    //         <h1 className="text-2xl font-semibold text-gray-800 mt-3">
    //           {username}
    //         </h1>
    //         <p className="text-gray-500 text-sm">Welcome to {username}'s profile</p>
    //       </div>

    //       {/* Action Buttons */}
    //       <div className="flex flex-wrap justify-center gap-4 mb-6">
    //         <button
    //           onClick={fetchPost}
    //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
    //         >
    //           Posts by {username}
    //         </button>
    //         <button
    //           onClick={fetchdisc}
    //           className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition"
    //         >
    //           Discussions by {username}
    //         </button>
    //       </div>

    //       {/* Tweets Section */}
    //       <div className="mb-6">
    //         <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
    //           Tweets
    //         </h2>
    //         {Array.isArray(tweets) && tweets.length > 0 ? (
    //           <ul className="space-y-3">
    //             {tweets.map((t) => (
    //               <li
    //                 key={t._id}
    //                 className="bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm border transition"
    //               >
    //                 {t.post}
    //               </li>
    //             ))}
    //           </ul>
    //         ) : (
    //           <p className="text-gray-500 italic">No tweets available</p>
    //         )}
    //       </div>

    //       {/* Discussions Section */}
    //       <div>
    //         <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
    //           Discussions
    //         </h2>
    //         {Array.isArray(posts) && posts.length > 0 ? (
    //           <ul className="space-y-3">
    //             {posts.map((p) => (
    //               <li
    //                 key={p._id}
    //                 className="bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm border transition"
    //               >
    //                 {p.title}
    //               </li>
    //             ))}
    //           </ul>
    //         ) : (
    //           <p className="text-gray-500 italic">No discussions available</p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // );


   return (
  <div className="min-h-screen bg-gray-100 flex justify-center p-6">
    <div className="bg-white shadow-lg rounded-2xl w-full max-w-6xl p-6 flex flex-col">

      {/* Profile Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          {username.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mt-3">
          {username}
        </h1>
        <p className="text-gray-500 text-sm">Welcome to {username}'s profile</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={fetchPost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Articles by {username}
        </button>
        <button
          onClick={fetchdisc}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Discussions by {username}
        </button>
      </div>

      {/* Bottom Section: Tweets & Discussions Side by Side */}
      <div className="flex gap-6 flex-1">
        
        {/* Tweets Column */}
        <div className="w-1/2 bg-gray-50 rounded-xl shadow-md p-5 overflow-y-auto max-h-[70vh]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Discussions
          </h2>
          {Array.isArray(tweets) && tweets.length > 0 ? (
            <ul className="space-y-3">
              {tweets.map((t) => (
                <li
                  key={t._id}
                  className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-sm border transition"
                >
                  {t.post}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No tweets available</p>
          )}
        </div>

        {/* Discussions Column */}
        <div className="w-1/2 bg-gray-50 rounded-xl shadow-md p-5 overflow-y-auto max-h-[70vh]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
            Articles
          </h2>
          {Array.isArray(posts) && posts.length > 0 ? (
            <ul className="space-y-3">
              {posts.map((p) => (
                <li
                  key={p._id}
                  className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-sm border transition"
                >
                  {p.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No discussions available</p>
          )}
        </div>
      </div>
    </div>
  </div>
);


}

export default Profile