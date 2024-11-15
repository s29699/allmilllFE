import React from 'react'

function Header() {
  
  return (
    <div className='flex mx-auto bg-purple-800 text-white'>
      <h2 className='mx-auto'>allmil</h2>
      <div className=' mx-auto flex border-2'>
        <h4 className='mx-12'>Weapons</h4>
        <h4 className='mx-12'>Blogs</h4>
        <h4 className='mx-12'>Discuss</h4>
        <h4 className='mx-12'>LaunchPad</h4>
      </div>
      <div className='mx-auto flex border-2'>
        <button className='mx-2'>Signup</button>
        <button className='mx-2'>Premium</button>
      </div>
    </div>
  )
}

export default Header