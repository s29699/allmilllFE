import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import UpdatePost from './UpdatePost.jsx';
import { UpdateContext } from '../../context/UpdateContext.jsx';

function Article() {
    const navigate = useNavigate();
    const {slug} = useParams();
    console.log("slug in Article: ", slug)
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    // const [isEdited, setIsEdited] = useState(false)
    const {isEdited, putTrue} = useContext(UpdateContext);


    const getPost = async () => {
        const response = await fetch(`http://localhost:7000/api/v1/posts/display/${slug}`,{
            method:"GET"
        });
        console.log("response in Article: ", response);
        const data = await response.json();
        // data.post.author = data.user.username;
        setPost(data.post);
        setUser(data.user);
        setIsLoading(false);
    }
    useEffect(() => {
        getPost()
    },[slug,isEdited])

    const handleDelete = async () => {
      const response = await fetch(`http://localhost:7000/api/v1/posts/delete/${slug}`,{
        method:"POST"
      });
      console.log("response: ", response);
      if(response){
        navigate("/blog/allpost");
      }
    }

    const handleEdit = () => {
      putTrue();
      // console.log("isEdited: ",isEdited);
      // navigate(`/blog/${slug}/edit`, {state:{slug}})
    }

    const patchEdit = async () => {

    }

  if(isLoading){
    return (<div>Loading.....</div>)
  }


  return (
    <div>
        {isEdited && <UpdatePost slug={slug} />}
        
        <h2>{post.title}</h2>
        <p> <Link to={`/profile/${user.username}`} >{user.username} </Link></p>
        <p>{post.lastUpdated}</p>
        <h4>{post.description}</h4>
        <button className='mx-2 px-2 border-2' onClick={handleDelete} >Delete</button>
        <button className='border-2 mx-2 px-2' onClick={handleEdit} >Edit Post</button>

    </div>
  )
}

export default Article