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

    // return (
    //   <div className="bg-slate-300 grid grid-cols-11">
    //     <div className="bg-slate-100 col-span-3">
    //       {/* <div className="fixed top-16 left-0 right-0 max-w-[375px] z-10 ">
    //       <div className="text-xl font-semibold text-gray-800 mt-6 ml-6 mb-2">
    //         Top Discussions
    //       </div>
    //       <div className="h-[calc(100vh-4rem)] overflow-y-auto mt-2 ml-4 border border-b-0">
    //         {topics?.map((p) => (
    //           <div
    //           key={p._id}
    //           className=" p-4 mb-3 shadow hover:shadow-lg transition"
    //           >
    //             <h2 className="text-lg font-medium text-gray-400 hover:text-gray-600">{p.post}</h2>
    //           </div>
    //           ))}
    //       </div>
    //       </div> */}
    //     </div>
    //     <div className="col-span-5 flex flex-col">
    //       <Outlet />
    //     </div>
    //     <div className="bg-slate-100 col-span-3">
    //       <div className="fixed" >
    //         <input type="text" placeholder="Type..."
    //           className="mt-4 bg rounded-md ml-6 px-4 py-2 pr-8 border-2 border-gray-200 focus:outline-gray-400" />
    //         <button
    //           className="ml-2 bg-blue-500 px-6 py-2 rounded-md hover:bg-gray-400" > 
    //           Search
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
  
//     return (
//   <div className="bg-gray-50 min-h-screen grid grid-cols-11 text-gray-800">
//     {/* Left Sidebar */}
//     <div className="bg-white col-span-3 border-r border-gray-200 hidden md:block shadow-sm">
//       <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
//         <h2 className="text-xl font-semibold text-gray-900 mt-6 ml-6 mb-4">
//           🌟 Top Discussions
//         </h2>
//         <div className="px-4">
//           {topics?.map((p) => (
//             <div
//               key={p._id}
//               className="p-4 mb-3 rounded-xl shadow hover:shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-100 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
//             >
//               <h3 className="text-base font-medium text-gray-700 hover:text-indigo-600">
//                 {p.post}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Main Content */}
//     <div className="col-span-11 md:col-span-5 flex flex-col border-r border-gray-200 bg-white shadow-sm">
//       {/* Header */}
//       {/* <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md px-5 py-4 z-10 rounded-b-lg">
//         <h1 className="text-2xl font-bold text-white">Discussions</h1>
//       </div> */}

//       {/* Content */}
//       <div className="p-5">
//         <Outlet />
//       </div>
//     </div>

//     {/* Right Sidebar */}
//     <div className="bg-white col-span-3 hidden lg:block shadow-sm">
//       <div className="sticky top-16 p-6">
//         {/* Search Box */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search topics..."
//             className="flex-grow rounded-xl border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition-all"
//           />
//           <button className="ml-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-all shadow-md">
//             Search
//           </button>
//         </div>

//         {/* Trending Topics */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold text-gray-900 mb-3">🔥 Trending</h2>
//           <ul className="space-y-3">
//             <li className="text-indigo-600 cursor-pointer hover:underline">
//               #React
//             </li>
//             <li className="text-indigo-600 cursor-pointer hover:underline">
//               #MERNStack
//             </li>
//             <li className="text-indigo-600 cursor-pointer hover:underline">
//               #JavaScript
//             </li>
//             <li className="text-indigo-600 cursor-pointer hover:underline">
//               #TailwindCSS
//             </li>
//           </ul>
//         </div>

//         {/* Suggestions */}
//         <div className="mt-10 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-gray-100">
//           <h3 className="text-base font-semibold text-gray-700 mb-2">
//             💡 Suggestions
//           </h3>
//           <p className="text-sm text-gray-600">
//             Join discussions, ask questions, and share knowledge with others.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );


return (
  <div className="bg-purple-50 min-h-screen grid grid-cols-11 text-gray-800 font-sans">
    {/* Left Sidebar */}
    <div className="bg-purple-100 col-span-3 border-r border-purple-200 hidden md:block">
      <div
        className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-6 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-5">
          Top Discussions
        </h2>

        <div className="space-y-3">
          {topics?.map((p) => (
            <div
              key={p._id}
              className="p-4 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              <h3 className="text-base font-medium text-gray-700 hover:text-purple-700 line-clamp-2">
                {p.post}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="col-span-11 md:col-span-5 flex flex-col border-r border-purple-200 bg-purple-50">
      <div className="sticky top-0 bg-white border-b border-purple-200 px-6 py-4 z-10 shadow-sm">
        <h1 className="text-2xl font-semibold text-purple-700 tracking-wide">
          Discussions
        </h1>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </div>

    {/* Right Sidebar */}
    <div className="bg-purple-100 col-span-3 hidden lg:block border-l border-purple-200">
      <div className="sticky top-16 p-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search topics..."
            className="flex-grow rounded-lg border border-purple-200 px-4 py-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-all shadow">
            Search
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-purple-700 mb-3">Trending</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 hover:text-purple-700 cursor-pointer">#React</li>
            <li className="text-gray-700 hover:text-purple-700 cursor-pointer">#MERNStack</li>
            <li className="text-gray-700 hover:text-purple-700 cursor-pointer">#JavaScript</li>
            <li className="text-gray-700 hover:text-purple-700 cursor-pointer">#TailwindCSS</li>
          </ul>
        </div>

        <div className="mt-10 p-5 bg-white rounded-xl border border-purple-200 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Suggestions</h3>
          <p className="text-sm text-gray-600">
            Join discussions, ask questions, and share your ideas with the community.
          </p>
        </div>
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
  