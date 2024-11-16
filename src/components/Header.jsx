import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  
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
        <button className='mx-2'> <Link to="/signup" >Signup </Link></button>
        <button className='mx-2'> <Link to="/login" >Login </Link></button>
      </div>
    </div>
  )
}

export default Header