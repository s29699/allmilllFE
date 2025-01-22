import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Header() {
  
  const {isLogged, user} = useContext(UserContext);
  const name = user?user.username:"no user";
  const [loginCheck, setLoginCheck] = useState(false)
  // const loginCheck = isLogged();
  // console.log(loginCheck);
  useEffect(()=>{
    setLoginCheck(isLogged())
  }, [])

  return (
    <div className='flex mx-auto py-4 bg-purple-800 text-white'>
      <h2 className='mx-auto'>
       <Link to="/" > allmil </Link> 
      </h2>
      <div className=' mx-auto flex border-2'>
        <h4 className='mx-12'> <Link to="/weapon"> Weapons </Link></h4>
        <h4 className='mx-12'> <Link to="/blog" > Blogs</Link></h4>
        <h4 className='mx-12'> <Link to="/discuss" > Discuss</Link></h4>
        <h4 className='mx-12'> <Link to="/yourweb" >LaunchPad </Link></h4>
        <h4 className='mx-2'> <Link to="/pro" >Premium </Link></h4>
      </div>
      <div className='mx-auto flex border-2'>
        {!loginCheck && <button className='mx-2'> <Link to="/signup" >Signup </Link></button> }
        {!loginCheck && <button className='mx-2'> <Link to="/login" >Login </Link></button> }
        {loginCheck && <div> <Link to={`/profile/${name}`} >{name}</Link> </div>}
        {loginCheck && <button>Logout</button>}
      </div>
    </div>
  )
}

export default Header