  import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

  function Discuss() {
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
      <div className="bg-slate-300 grid grid-cols-12">
        <div className="bg-slate-100 col-span-3">
          <div className="fixed top-16 left-0 right-0 max-w-[375px] z-10 ">
          <div className="text-xl font-semibold text-gray-800 mt-6 ml-6 mb-2">
            Top Discussions
          </div>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto mt-2 ml-4 border border-b-0">
            {topics?.map((p) => (
              <div
              key={p._id}
              className=" p-4 mb-3 shadow hover:shadow-lg transition"
              >
                <h2 className="text-lg font-medium text-gray-400 hover:text-gray-600">{p.post}</h2>
              </div>
              ))}
          </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-col">
          <Outlet />
        </div>
        <div className="bg-slate-100 col-span-3">
          <div className="fixed" >
            <input type="text" placeholder="Type..."
              className="mt-4 bg rounded-md ml-6 px-4 py-2 pr-8 border-2 border-gray-200 focus:outline-gray-400" />
            <button
              className="ml-2 bg-blue-500 px-6 py-2 rounded-md hover:bg-gray-400" > 
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Discuss;



  // import React, { useEffect, useRef, useState } from "react";

  // function Discuss() {
  //   const [topics, setTopics] = useState([]);
  //   const postRef = useRef();
  //   const token = localStorage.getItem("authToken");
  
  //   const addPost = async () => {
  //     const post = postRef.current.value;
  //     if (!post.trim()) return;
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
  //       getAll(); // Refresh the list after posting
  //     }
  //   };
  
  //   const getAll = async () => {
  //     const response = await fetch("http://localhost:7000/api/v1/discuss/allpost");
  //     const data = await response.json();
  //     setTopics(data.posts);
  //   };
  
  //   useEffect(() => {
  //     getAll();
  //   }, []);
  
  //   return (
  //     <div className="min-h-screen w-full bg-gray-100 p-6">
  //       <div className="max-w mx-auto grid grid-cols-6 gap-4">
  //         <aside className="col-span-1 bg-slate-200 rounded-lg p-4 shadow">
  //           {/* Sidebar content (optional) */}
  //         </aside>
  
  //         <main className="col-span-4 space-y-6">
  //           <section className="bg-white p-6 rounded-lg shadow-md">
  //             <h1 className="text-2xl font-semibold mb-4 text-gray-800">Start a Discussion</h1>
  //             <div className="flex gap-4">
  //               <input
  //                 type="text"
  //                 ref={postRef}
  //                 placeholder="Share your thought..."
  //                 className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //               />
  //               <button
  //                 onClick={addPost}
  //                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  //               >
  //                 Post
  //               </button>
  //             </div>
  //           </section>
  
  //           <section className="space-y-4">
  //             {topics?.map((p) => (
  //               <div
  //                 key={p._id}
  //                 className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
  //               >
  //                 <h2 className="text-lg font-medium text-gray-800">{p.post}</h2>
  //               </div>
  //             ))}
  //           </section>
  //         </main>
  
  //         <aside className="col-span-1 bg-orange-200 rounded-lg p-4 shadow">
  //           {/* Right sidebar content (optional) */}
  //         </aside>
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default Discuss;
  