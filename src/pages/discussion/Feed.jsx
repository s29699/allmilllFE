import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";
import TopicCard from "../../components/discuss/TopicCard";

// function Feed () {

//     const {setTweet} = useContext(TweetContext);
//     const [topics, setTopics] = useState([]);
//         const postRef = useRef();
//         const token = localStorage.getItem("authToken");
    
//         const navigate = useNavigate();
    
//         const addPost = async () => {
//           const post = postRef.current.value;
//           console.log("post: ", post);
//           const response = await fetch(
//             "http://localhost:7000/api/v1/discuss/create",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//               body: JSON.stringify({ post }),
//             }
//           );
//           if (response) {
//             postRef.current.value = "";
//             await getAll();
//             console.log(response);
//           }
//         };
    
//         const getAll = async () => {
//           const response = await fetch(
//             `http://localhost:7000/api/v1/discuss/allpost`,
//             {
//               method: "GET",
//             }
//           );
//           const data = await response.json();
//           console.log("response getAll:",response)
//           console.log("typeof",typeof(data.posts));
//           setTopics(data.posts);
//         };
//         useEffect(() => {
//           getAll()
//         }, []);
    
//         function getDate (d) {
//           const y=d.slice(0,3);
//           const m = d.slice(5,6);
//           const da = d.slice(8,9)
//           return (da+m+y);
//         }


//     return (
//         <> 
//             <div className="bg-slate-100 p-6 flex flex-col">
//             {/* <label className="pl-1">Start a discussion</label> */}
//             {/* <input type="text" ref={postRef} placeholder="Share your thought" /> */}
//             <h1 className="text-xl font-semibold mb-2 pl-1 text-gray-800">Start a Discussion</h1>
//             <textarea
//               ref={postRef}
//               placeholder="Share your thought..."
//               rows={4}
//               className="resize-none border border-gray-300 rounded-md p-3 text-gray-800 outline-none focus:ring-2 focus:ring-gray-400"
//             />
//             <button onClick={addPost}
//               className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400" >
//               Add Post</button>
//           </div>
//           <div className="bg-slate-100 p-4 flex flex-col ">

//             {topics?.map((p) => {
//               const date = new Date(p.createdAt);
//               const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//               return (
//                 <TopicCard
//                   key={p._id} 
//                   ele={p}
//                   etype="norm"
//                 />
//                 // <div
//                 //   key={p._id}
//                 //   className="bg-white p-4 mb-3 rounded-lg shadow hover:shadow-lg transition"
//                 //   onClick={() => {
//                 //     setTweet(p);
//                 //     console.log("p from feed", p);
//                 //     navigate(`/discuss/${p.writer.username}/${p.uuid}`)
//                 //   }}
//                 // >
//                 //   <p onClick={ () => {navigate(`/profile/${p.writer.username}`)}}>{p.writer.username}</p>
//                 //   <p className="text-xs ">created on: {formattedDate}</p>
//                 //   <h2 className="text-md font-medium text-gray-800">{p.post}</h2>
//                 // </div>
//               );
//             })}
//           </div>        
//         </>
//     )
// }

// function Feed() {
//   const { setTweet } = useContext(TweetContext);
//   const [topics, setTopics] = useState([]);
//   const postRef = useRef();
//   const token = localStorage.getItem("authToken");
//   const navigate = useNavigate();

//   // Add new post
//   const addPost = async () => {
//     const post = postRef.current.value.trim();
//     if (!post) return;

//     const response = await fetch("http://localhost:7000/api/v1/discuss/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ post }),
//     });

//     if (response.ok) {
//       postRef.current.value = "";
//       await getAll();
//     }
//   };

//   // Fetch all posts
//   const getAll = async () => {
//     const response = await fetch("http://localhost:7000/api/v1/discuss/allpost");
//     const data = await response.json();
//     setTopics(data.posts || []);
//   };

//   useEffect(() => {
//     getAll();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center py-6 px-3">
//       <div className="w-full max-w-2xl">
//         {/* Post Box */}
//         <div className="bg-white shadow-md rounded-2xl p-5 mb-6 border border-gray-200">
//           <h1 className="text-lg font-semibold text-gray-800 mb-3">
//             Start a Discussion
//           </h1>
//           <textarea
//             ref={postRef}
//             placeholder="Share your thoughts..."
//             rows={4}
//             className="resize-none border border-gray-300 rounded-xl p-3 text-gray-800 w-full outline-none focus:ring-2 focus:ring-blue-400 transition"
//           />
//           <div className="flex justify-end mt-3">
//             <button
//               onClick={addPost}
//               className="bg-blue-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-600 active:scale-95 transition"
//             >
//               Add Post
//             </button>
//           </div>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-4">
//           {topics.length > 0 ? (
//             topics.map((p) => (
//               <TopicCard
//                 key={p._id}
//                 ele={p}
//                 etype="norm"
//                 onClick={() => {
//                   setTweet(p);
//                   navigate(`/discuss/${p.writer.username}/${p.uuid}`);
//                 }}
//               />
//             ))
//           ) : (
//             <div className="bg-white shadow rounded-xl p-6 text-center text-gray-500">
//               No posts yet. Be the first to start a discussion! 🚀
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



function Feed() {
  const { setTweet } = useContext(TweetContext);
  const [topics, setTopics] = useState([]);
  const postRef = useRef();
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  // Add new post
  const addPost = async () => {
    const post = postRef.current.value.trim();
    if (!post) return;

    const response = await fetch("http://localhost:7000/api/v1/discuss/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post }),
    });

    if (response.ok) {
      postRef.current.value = "";
      await getAll();
    }
  };

   const handleLikeDislike = async (tweetid, action) => {
    console.log("tweetid from feed", tweetid);
    console.log("action",action);
        const response = await fetch(`http://localhost:7000/api/v1/discuss/${action}/${tweetid}`,{
            method:'GET',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json();
        console.log("data", data);

        // getTopic();
    }

  // Fetch all posts
  const getAll = async () => {
    const response = await fetch("http://localhost:7000/api/v1/discuss/allpost");
    const data = await response.json();
    setTopics(data.posts || []);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 flex justify-center py-6 px-3">
      <div className="w-full max-w-2xl">
        {/* Post Box */}
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-5 mb-6 border border-purple-200">
          <h1 className="text-xl font-semibold text-purple-800 mb-3">
            Start a Discussion
          </h1>
          <textarea
            ref={postRef}
            placeholder="Share your thoughts..."
            rows={4}
            className="resize-none border border-purple-200 rounded-xl p-3 text-gray-800 w-full outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <div className="flex justify-end mt-3">
            <button
              onClick={addPost}
              className="bg-purple-600 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:bg-purple-700 active:scale-95 transition"
            >
              Add Post
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <div className="space-y-4">
          {topics.length > 0 ? (
            topics.map((p) => (
              <TopicCard
                key={p._id}
                ele={p}
                etype="norm"
                onAction={(action) => handleLikeDislike(p._id, action)}
                onClick={() => {
                  setTweet(p);
                  navigate(`/discuss/${p.writer.username}/${p.uuid}`);
                }}
              />
            ))
          ) : (
            <div className="bg-white/80 backdrop-blur-md shadow rounded-xl p-6 text-center text-gray-500 border border-purple-200">
              No posts yet. Be the first to start a discussion! 🚀
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




export default Feed;