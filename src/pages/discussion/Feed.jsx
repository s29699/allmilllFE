import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";

function Feed () {

    const {setTweet} = useContext(TweetContext);
    const [topics, setTopics] = useState([]);
        const postRef = useRef();
        const token = localStorage.getItem("authToken");
    
        const navigate = useNavigate();
        // const toProfile = async () => {
        //   navigate(`/profie/${p.writer.username}`)
        // }
    
        const addPost = async () => {
          const post = postRef.current.value;
          console.log("post: ", post);
          const response = await fetch(
            "http://localhost:7000/api/v1/discuss/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ post }),
            }
          );
          if (response) {
            postRef.current.value = "";
            await getAll();
            console.log(response);
          }
        };
    
        const getAll = async () => {
          const response = await fetch(
            `http://localhost:7000/api/v1/discuss/allpost`,
            {
              method: "GET",
            }
          );
          const data = await response.json();
          console.log("response getAll:",response)
          console.log("typeof",typeof(data.posts));
          setTopics(data.posts);
        };
        useEffect(() => {
          getAll()
        }, []);
    
        function getDate (d) {
          const y=d.slice(0,3);
          const m = d.slice(5,6);
          const da = d.slice(8,9)
          return (da+m+y);
        }



    return (
        <> 
            <div className="bg-slate-100 p-6 flex flex-col">
            {/* <label className="pl-1">Start a discussion</label> */}
            {/* <input type="text" ref={postRef} placeholder="Share your thought" /> */}
            <h1 className="text-xl font-semibold mb-2 pl-1 text-gray-800">Start a Discussion</h1>
            <textarea
              ref={postRef}
              placeholder="Share your thought..."
              rows={4}
              className="resize-none border border-gray-300 rounded-md p-3 text-gray-800 outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button onClick={addPost}
              className="bg-blue-500 self-end px-12 py-2 rounded-md mt-1 hover:bg-gray-400" >
              Add Post</button>
          </div>
          <div className="bg-slate-100 border-black p-4 flex flex-col ">
            {/* {topics?.map((p) => (
              <div key={p._id} 
                className="hover:bg-gray-400 hover: border p-4 rounded-sm mb-2 ">
                <h2>{p.post}</h2>
              </div>
            ))} */}
            {topics?.map((p) => {
              const date = new Date(p.createdAt);
              const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
              return (

                <div
                key={p._id}
                className="bg-white p-4 mb-3 rounded-lg shadow hover:shadow-lg transition"
                onClick={() => {
                  setTweet(p);
                  console.log("p from feed", p);
                  navigate(`/discuss/${p.writer.username}/${p.uuid}`)
                }}
                >
                  <p onClick={ () => {navigate(`/profile/${p.writer.username}`)}}>{p.writer.username}</p>
                  <p className="text-xs ">created on: {formattedDate}</p>
                  <h2 className="text-md font-medium text-gray-800">{p.post}</h2>
                </div>
              );
            })}
          </div>        
        </>
    )
}

export default Feed;