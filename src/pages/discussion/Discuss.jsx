  import React, { useEffect, useRef, useState } from "react";

  function Discuss() {
    const [topics, setTopics] = useState([]);
    const postRef = useRef();
    const token = localStorage.getItem("authToken");

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
      setTopics(data.posts);
    };
    useEffect(() => {
      getAll()
    }, []);

    return (
      <div className="grid grid-cols-6 gap-4">
        <div className="bg-slate-500 col-span-1">
        </div>
        <div className="col-span-4 flex flex-col">
          <div className="bg-gray-500 p-6 flex flex-col">
            <input type="text" ref={postRef} placeholder="Your thougth" />
            <button onClick={addPost}>Add Post</button>
          </div>
          <div className="bg-slate-400 border-red-600 border p-4 rounded-md flex flex-col ">
            {topics?.map((p) => (
              <div key={p._id} className="border p-4 rounded-md ">
                <h2>{p.post}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-400 col-span-1">
        </div>
      </div>
    );
  }

  export default Discuss;
