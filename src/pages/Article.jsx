import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Article() {
    const {slug} = useParams();
    console.log("slug in Article: ", slug)
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const getPost = async () => {
        const response = await fetch(`http://localhost:7000/api/v1/posts/display/${slug}`,{
            method:"GET"
        });
        console.log("respomnse in Article: ", response);
        const data = await response.json();
        setPost(data.post);
        setIsLoading(false);
    }
    useEffect(() => {
        getPost()
    },[slug])

  if(isLoading){
    return (<div>Loading.....</div>)
  }

  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <p>{post.lastUpdated}</p>
        <h4>{post.description}</h4>
    </div>
  )
}

export default Article