  import React, { useContext,useEffect,useState } from 'react'
  import { Link } from 'react-router-dom'
  import { UserContext } from '../context/UserContext'

  function Header() {
    
    const {isLogged, user, setUser, Logout} = useContext(UserContext);
    // const {isLogged, user, usrname, setUser, setUsrname} = useContext(UserContext);
    // const name = user?user.username:"no user";
    const name = user?.username;
    const [loginCheck, setLoginCheck] = useState(false)
    // const loginCheck = isLogged();
    // console.log(loginCheck);
    useEffect(()=>{
      setLoginCheck(isLogged())
    }, [user,loginCheck])
    
    const handleLogout = () => {
      Logout();
      setLoginCheck(isLogged())
    }

    return (
      <div className='sticky top-0 z-20 flex mx-auto py-4 bg-purple-800 text-white'>
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
          {loginCheck && <div> <Link to={`/profile/${user?.username}`} >Profile</Link> </div>}
          {loginCheck && <button className='ml-2' onClick={handleLogout} >Logout</button>}
        </div>
      </div>
    )
  }

  export default Header