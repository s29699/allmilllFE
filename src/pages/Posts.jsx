import React, { useEffect, useRef, useState } from 'react'
import PostCard from '../components/PostCard';

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

  return (
    <>
      <h3>ALL POSTS</h3>
      <div className="grid grid-cols-3 m-12">
        {
          posts.map((post) => (
            <div key={post._id}>
              <PostCard
                id={post._id}
                slug={post.slug}
                title={post.title}
                description={post.description}
              />
            </div>
          ))
          //   posts.forEach(element => {
          //     <PostCard
          //       title={element.title}
          //       description={element.description}
          //     />
          //   })
        }
        <button 
         className="px-2 mx-4" 
         onClick={prevbutton}>
          Previous
        </button>
        <button
          className="px-2 mx-4"
          onClick={nextButton}>
          Next
        </button>
      </div>
    </>
  );
}

export default Posts