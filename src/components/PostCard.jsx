import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostCard({id, slug, title , description}) {
  
  const navigate = useNavigate();
  const openPost = async () => {
    console.log("Openpost in Postcard, slug: ",slug);
    navigate(`/blog/${slug}`);
  }

  return (
    <div 
      className='bg-blue-200 min-h-48 border-2 m-12 flex flex-col justify-between'
      onDoubleClick={openPost}
    >
      <h3>{title}</h3>
      <p>19/01/2024</p>
      <p>{description}</p>
    </div>
  )
}

export default PostCard