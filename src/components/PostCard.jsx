import React from 'react'

function PostCard({title , description}) {
  return (
    <div className='bg-blue-200 min-h-48 border-2 m-12 flex flex-col justify-between'>
        <h3>{title}</h3>
        <p>19/01/2024</p>
        <p>{description}</p>
    </div>
  )
}

export default PostCard