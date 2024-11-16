import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';

function Posts() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch(
          "http://localhost:7000/api/v1/posts/allpost"
        );
        const data = await response.json();
        setPosts(data.allposts);
    }

    useEffect(() => {
      getPosts()
    }, [])
    
  return (
    <>
    <h3>ALL POSTS</h3>
    <div className='grid grid-cols-3 m-12'>
        {
            posts.map((post) => (
                <div key={post._id}>
                <PostCard id={post._id} slug={post.slug} title={post.title} description={post.description} />
                </div>
            ))
        //   posts.forEach(element => {
        //     <PostCard
        //       title={element.title}
        //       description={element.description} 
        //     />
        //   })
        }
    </div>
    </>
  )
}

export default Posts