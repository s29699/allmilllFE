import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard';

// This is to display all the posts.

function Posts() {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    const getPosts = async () => {
        const response = await fetch(
          `http://localhost:7000/api/v1/posts/allpost/${page}`,{
            method:"GET"
          }
        );
        
        const data = await response.json();
        setPosts(data.allposts);
    }

    useEffect(() => {
      console.log("useEffect: ",page)
      getPosts()
    }, [page])
    
    const prevbutton = () => {
      if(page > 1) setPage(() => page - 1)
        return 1;
    }

    const nextButton = () => {
      if(posts.length < 9) return;
      setPage(() => page + 1);
    }

  // return (
  //   <>
  //     <h3>ALL POSTS</h3>
  //     <div className="grid grid-cols-3 m-12">
  //       {
  //         posts.map((post) => (
  //           <div key={post._id}>
  //             <PostCard
  //               id={post._id}
  //               slug={post.slug}
  //               title={post.title}
  //               description={post.description}
  //             />
  //           </div>
  //         ))
  //         //   posts.forEach(element => {
  //         //     <PostCard
  //         //       title={element.title}
  //         //       description={element.description}
  //         //     />
  //         //   })
  //       }
  //       {posts.length < 1 && <p> No more posts...</p>}
  //       <button 
  //        className="px-2 mx-4" 
  //        onClick={prevbutton}>
  //         Previous
  //       </button>
  //       <button
  //         className="px-2 mx-4"
  //         onClick={nextButton}>
  //         Next
  //       </button>
  //     </div>
  //   </>
  // );

return (
  <>
    {/* Page Title */}
    <h3 className="text-3xl font-bold text-center text-gray-800 mt-6 mb-8 tracking-wide">
      ALL POSTS
    </h3>

    {/* Single Column Layout */}
    <div className="flex flex-col gap-6 px-6 max-w-3xl mx-auto">
      {posts.map((post) => (
        <div key={post._id} className="w-full">
          <PostCard
            id={post._id}
            slug={post.slug}
            title={post.title}
            description={post.description}
          />
        </div>
      ))}

      {/* No Posts */}
      {posts.length < 1 && (
        <p className="text-center text-gray-500 text-lg">
          No more posts...
        </p>
      )}
    </div>

    {/* Pagination Buttons */}
    <div className="flex justify-center items-center gap-6 mt-10 mb-6">
      <button
        className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
        onClick={prevbutton}
      >
        Previous
      </button>
      <button
        className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
        onClick={nextButton}
      >
        Next
      </button>
    </div>
  </>
);




}

export default Posts