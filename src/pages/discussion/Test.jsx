// import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
// import { TweetContext } from "../../context/discuss/TopicContext";
// import { UserContext } from "../../context/UserContext";
// import TopicCard from "../../components/discuss/TopicCard";

// function Test () {

//     const {tweet} = useContext(TweetContext);
//     const {user} = useContext(UserContext);
//     const [twt, setTwt] = useState();
//     const [reply, setReply] = useState([]);
//     const [anc, setAnc] = useState([]);
//     const replyRef = useRef();
//     const focusRef = useRef();

//     const navigate = useNavigate();

//     const {username,uuid} = useParams();
//     console.log("1");
//     const getTopic = async () => {
//         const response = await fetch(
//           `http://localhost:7000/api/v1/discuss/${uuid}`,
//           {
//             method: "GET",
//           }
//         )

//         const data = await response.json();
//         console.log("data", data.parent[0]);
//         setTwt(data.topic);
//         setAnc(data.parent[0].ancestors)
//     }

//     console.log("2");

//     const getReply = async () => {
//         const replies = await fetch(
//             `http://localhost:7000/api/v1/discuss/fetchreply/${uuid}`,
//             {
//                 method: "GET",
//             }
//         )

//         const repdata = await replies.json();
//         console.log("repdata", repdata);
//         setReply(repdata.replies);
//     }

//     const handleReplyCreation = async () => {
//         const replyVal = replyRef.current.value ;
//         console.log("reply to tweet", replyVal);
//         const token = user;
//         console.log("TOKEN", token);
//         console.log("user from context", user);
//         // const response = await axios.get(`http://localhost:7000/api/v1/discuss/${username}/${uuid}`,{
//         //     Headers
//         // })
//         const response = await fetch(
//           `http://localhost:7000/api/v1/discuss/addreply/${uuid}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ replyVal }),
//           }
//         );

//         if(response){
//             replyRef.current.value='';
//             console.log("response", response);
//             getReply();
//         }
//     }

//     const handleLikeDislike = async (tweetid, action) => {
//         console.log("tweetis from test.jsx", tweetid)
//         const response = await fetch(`http://localhost:7000/api/v1/discuss/${action}/${tweetid}`,{
//             method:'GET',
//             headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//         })
//         const data = await response.json();
//         console.log("data", data);

//         getTopic();
//     }

//     useEffect(() => {
//         getTopic(); 
//         getReply();
//     }, [uuid,username])
//     // useEffect(() => {
//     //     if (focusRef.current) {
//     //     focusRef.current.scrollIntoView({ behavior: "auto", block: "center" });
//     //     }
//     // }, []);

//     console.log("4");
//     // useEffect(() => {
//     //     getReply();
//     // }, [uuid, username])
//     console.log("5");


//     // return (
//     //     <div className="flex flex-col mx-auto">
            
//     //         <div className=" my-2">
//     //             {Array.isArray(anc) && anc.map((a) => (
//     //                 <TopicCard 
//     //                 key={a._id}
//     //                 // className="border-2 border-green-500"
//     //                 ele={a}
//     //                 etype="norm"
//     //                 />
//     //             ))} 
//     //             {/* {twt && <div>{twt.post}</div>} */}                
//     //         </div>

//     //         <div ref={focusRef}>
//     //             {twt &&
//     //                 <TopicCard 
//     //                     ele={twt}
//     //                     etype="main"
//     //                 />
//     //             }
//     //         </div>

//     //         <div className="" >
//     //             <input
//     //                 className="rounded-md p-3 min-w-96" 
//     //                 placeholder="Write reply..." ref={replyRef} />
//     //             <button 
//     //                 className="ml-1 p-2 bg-blue-600 rounded-md px-4"
//     //                 onClick={handleReplyCreation}>
//     //                 Create Reply
//     //             </button>
//     //         </div>
//     //         <div className=" my-4">
//     //             {
//     //                 Array.isArray(reply) && 
//     //                 reply.map((r)=> (
//     //                     <TopicCard 
//     //                     key={r._id}
//     //                     ele={r}
//     //                     etype="norm" 
//     //                     // onClick={() => getReplyReply(r)}
//     //                     // onClick={() => (navigate(`/discuss/${r.writer.username}/${r.uuid}`))}
//     //                     // className="border border-green-700"
//     //                         // <p> {r.post} </p>
//     //                         // <p> {r.writer.username} </p>
//     //                     />
//     //                 ))
//     //             }
//     //         </div>
//     //     </div>
//     // )


//    return (
//     <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
//         {/* Main Container */}
//         <div className="w-full max-w-2xl px-4 py-6 space-y-6">
            
//             {/* ----------- Parent Tweets Section ----------- */}
//             {Array.isArray(anc) && anc.length > 0 && (
//                 <div className="space-y-3">
//                     {anc.map((a) => (
//                         <TopicCard 
//                             key={a._id}
//                             ele={a}
//                             etype="norm"
//                             onAction={(action) => handleLikeDislike(a._id, action)}
//                         />
//                     ))}
//                 </div>
//             )}

//             {/* ----------- Focused Main Tweet ----------- */}
//             {twt && (
//                 <div ref={focusRef} className="bg-white shadow-md rounded-xl border border-gray-200 p-4">
//                     <TopicCard 
//                         ele={twt}
//                         etype="main"
//                         onAction={(action) => handleLikeDislike(twt._id, action)}
//                     />
//                 </div>
//             )}

//             {/* ----------- Reply Input Section ----------- */}
//             <div className="flex items-center w-full">
//                 <input
//                     ref={replyRef}
//                     className="flex-1 rounded-xl p-3 bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none shadow-sm"
//                     placeholder="Write a reply..."
//                 />
//                 <button
//                     onClick={handleReplyCreation}
//                     className="ml-3 px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md"
//                 >
//                     Reply
//                 </button>
//             </div>

//             {/* ----------- Replies Section ----------- */}
//             <div className="space-y-3">
//                 {Array.isArray(reply) && reply.length > 0 ? (
//                     reply.map((r) => (
//                         <TopicCard 
//                             key={r._id}
//                             ele={r}
//                             etype="norm"
//                             onAction={(action) => handleLikeDislike(r._id, action)}
//                         />
//                     ))
//                 ) : (
//                     <p className="text-gray-500 text-center italic">
//                         No replies yet. Be the first to reply!
//                     </p>
//                 )}
//             </div>
//         </div>
//     </div>
// );

// // return (
// //     // Ensures the container takes at least the full screen height, providing a stable scrolling context.
// //     <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 font-sans">
      
// //         {/* Main content container with a max-width for readability on larger screens. */}
// //         <div className="w-full max-w-2xl px-4 py-8 space-y-6">
            
// //             {/* ----------- Parent Tweets Section ----------- */}
// //             {Array.isArray(anc) && anc.length > 0 && (
// //                 // A container for ancestor tweets with consistent spacing.
// //                 <div className="space-y-4">
// //                     {anc.map((a) => (
// //                         <TopicCard 
// //                             key={a._id}
// //                             ele={a}
// //                             etype="norm"
// //                             onAction={(action) => handleLikeDislike(a._id, action)}
// //                         />
// //                     ))}
// //                 </div>
// //             )}

// //             {/* ----------- Focused Main Tweet ----------- */}
// //             {twt && (
// //                 // This is the element to be focused. The 'ring' provides a visual cue.
// //                 // The 'scroll-mt-8' (scroll-margin-top) adds space above when scrolled to.
// //                 <div ref={focusRef} className="scroll-mt-8 bg-white shadow-lg rounded-xl border border-gray-200 p-4 ring-2 ring-blue-500/50">
// //                     <TopicCard 
// //                         ele={twt}
// //                         etype="main"
// //                         onAction={(action) => handleLikeDislike(twt._id, action)}
// //                     />
// //                 </div>
// //             )}

// //             {/* ----------- Reply Input Section ----------- */}
// //             <div className="flex items-center w-full gap-3 pt-4 border-t border-gray-200">
// //                 <input
// //                     ref={replyRef}
// //                     className="flex-1 rounded-full px-4 py-2 bg-gray-200 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-200"
// //                     placeholder="Post your reply..."
// //                 />
// //                 <button
// //                     onClick={handleReplyCreation}
// //                     className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md active:scale-95"
// //                 >
// //                     Reply
// //                 </button>
// //             </div>

// //             {/* ----------- Replies Section ----------- */}
// //             <div className="space-y-4">
// //                 {Array.isArray(reply) && reply.length > 0 ? (
// //                     reply.map((r) => (
// //                         <TopicCard 
// //                             key={r._id}
// //                             ele={r}
// //                             etype="norm"
// //                             onAction={(action) => handleLikeDislike(r._id, action)}
// //                         />
// //                     ))
// //                 ) : (
// //                     <div className="text-center py-10">
// //                         <p className="text-gray-500 italic">
// //                             No replies yet. Be the first to reply!
// //                         </p>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     </div>
// // );




// }

// export default Test;



import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";
import { UserContext } from "../../context/UserContext";
import TopicCard from "../../components/discuss/TopicCard";

function Test() {
  const { tweet } = useContext(TweetContext);
  const { user } = useContext(UserContext);
  const [twt, setTwt] = useState();
  const [reply, setReply] = useState([]);
  const [anc, setAnc] = useState([]);
  const replyRef = useRef();
  const focusRef = useRef(null); // Initialize ref with null

  const navigate = useNavigate();
  const { username, uuid } = useParams();

  const getTopic = async () => {
    const response = await fetch(
      `http://localhost:7000/api/v1/discuss/${uuid}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setTwt(data.topic);
    setAnc(data.parent[0].ancestors);
  };

  const getReply = async () => {
    const replies = await fetch(
      `http://localhost:7000/api/v1/discuss/fetchreply/${uuid}`,
      {
        method: "GET",
      }
    );
    const repdata = await replies.json();
    setReply(repdata.replies);
  };

  const handleReplyCreation = async () => {
    const replyVal = replyRef.current.value;
    const token = user;
    const response = await fetch(
      `http://localhost:7000/api/v1/discuss/addreply/${uuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ replyVal }),
      }
    );

    if (response) {
      replyRef.current.value = "";
      getReply();
    }
  };

  const handleLikeDislike = async (tweetid, action) => {
    const token = user; // Make sure token is defined here
    const response = await fetch(
      `http://localhost:7000/api/v1/discuss/${action}/${tweetid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    // Re-fetch both topic and replies to ensure UI is up-to-date
    getTopic();
    getReply();
  };

  // Initial data fetch
  useEffect(() => {
    getTopic();
    getReply();
  }, [uuid, username]);

  // This useEffect handles scrolling the main tweet into view
  useEffect(() => {
    // Check if the tweet data has loaded and the ref is attached to an element
    if (twt && focusRef.current) {
      // Scroll the element to the center of the viewport
      focusRef.current.scrollIntoView({
        behavior: "smooth", // For a smooth scrolling animation
        block: "center", // Vertically centers the element
      });
    }
  }, [twt]); // This effect depends on `twt`. It runs when `twt` is populated.

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl px-4 py-6 space-y-6">
        {/* ----------- Parent Tweets Section ----------- */}
        {Array.isArray(anc) &&
          anc.length > 0 && (
            <div className="space-y-3">
              {anc.map((a) => (
                <TopicCard
                  key={a._id}
                  ele={a}
                  etype="norm"
                  onAction={(action) => handleLikeDislike(a._id, action)}
                />
              ))}
            </div>
          )}

        {/* ----------- Focused Main Tweet ----------- */}
        {twt && (
          // The 'ref' is attached here. When this div renders, the ref will be set.
          <div
            ref={focusRef}
            className="bg-white shadow-md rounded-xl border border-gray-200 p-4"
          >
            <TopicCard
              ele={twt}
              etype="main"
              onAction={(action) => handleLikeDislike(twt._id, action)}
            />
          </div>
        )}

        {/* ----------- Reply Input Section ----------- */}
        <div className="flex items-center w-full">
          <input
            ref={replyRef}
            className="flex-1 rounded-xl p-3 bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none shadow-sm"
            placeholder="Write a reply..."
          />
          <button
            onClick={handleReplyCreation}
            className="ml-3 px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Reply
          </button>
        </div>

        {/* ----------- Replies Section ----------- */}
        <div className="space-y-3">
          {Array.isArray(reply) && reply.length > 0 ? (
            reply.map((r) => (
              <TopicCard
                key={r._id}
                ele={r}
                etype="norm"
                onAction={(action) => handleLikeDislike(r._id, action)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center italic">
              No replies yet. Be the first to reply!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
