  import React, { useContext,useEffect,useState } from 'react'
  import { Link, NavLink } from 'react-router-dom'
  import { UserContext } from '../context/UserContext'

  function Header() {
    
    const {isLogged, user, username, Logout} = useContext(UserContext);
    // const {isLogged, user, usrname, setUser, setUsrname} = useContext(UserContext);
    // const name = user?user.username:"no user";
    // const name = user?.username;
    const [loginCheck, setLoginCheck] = useState(false)
    // const loginCheck = isLogged();
    console.log("loginCheck",loginCheck);
    console.log("username", username);
    useEffect(()=>{
      setLoginCheck(isLogged())
    }, [])
    
    const handleLogout = () => {
      Logout();
      setLoginCheck(isLogged())
    }

    // return (
    //   <div className='sticky top-0 z-20 flex mx-auto py-4 bg-purple-800 text-white'>
    //     <h2 className='mx-auto'>
    //     <Link to="/" > allmil </Link> 
    //     </h2>
    //     <div className=' mx-auto flex border-2'>
    //       <h4 className='mx-12'> <Link to="/weapon"> Weapons </Link></h4>
    //       <h4 className='mx-12'> <Link to="/blog" > Blogs</Link></h4>
    //       <h4 className='mx-12'> <Link to="/discuss" > Discuss</Link></h4>
    //       <h4 className='mx-12'> <Link to="/yourweb" >LaunchPad </Link></h4>
    //       <h4 className='mx-2'> <Link to="/pro" >Premium </Link></h4>
    //     </div>
    //     <div className='mx-auto flex border-2'>
    //       {!loginCheck && <button className='mx-2'> <Link to="/signup" >Signup </Link></button> }
    //       {!loginCheck && <button className='mx-2'> <Link to="/login" >Login </Link></button> }
    //       {loginCheck && <div> <Link to={`/profile/${username}`} >Profile</Link> </div>}
    //       {loginCheck && <button className='ml-2' onClick={handleLogout} >Logout</button>}
    //     </div>
    //   </div>
    // )

// //    return (
// //   <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-950 to-gray-900 shadow-lg text-gray-200">
// //     {/* Logo */}
// //     <h2 className="text-2xl font-semibold tracking-wide hover:text-amber-300 transition-colors duration-200">
// //       <Link to="/">allmil</Link>
// //     </h2>

// //     {/* Navigation Links */}
// //     <div className="hidden md:flex space-x-8 text-lg font-medium">
// //       <Link to="/weapon" className="hover:text-amber-300 transition-colors duration-200">Weapons</Link>
// //       <Link to="/blog" className="hover:text-amber-300 transition-colors duration-200">Blogs</Link>
// //       <Link to="/discuss" className="hover:text-amber-300 transition-colors duration-200">Discuss</Link>
// //       <Link to="/yourweb" className="hover:text-amber-300 transition-colors duration-200">LaunchPad</Link>
// //       <Link to="/pro" className="hover:text-amber-300 transition-colors duration-200">Premium</Link>
// //     </div>

// //     {/* Auth Buttons */}
// //     <div className="flex items-center space-x-4">
// //       {!loginCheck && (
// //         <>
// //           <Link
// //             to="/signup"
// //             className="px-4 py-2 rounded-lg bg-stone-700 text-gray-200 font-medium hover:bg-stone-600 hover:shadow-md hover:shadow-stone-500/30 transition-all duration-300"
// //           >
// //             Signup
// //           </Link>
// //           <Link
// //             to="/login"
// //             className="px-4 py-2 rounded-lg bg-stone-600 text-gray-200 font-medium hover:bg-stone-500 hover:shadow-md hover:shadow-stone-400/30 transition-all duration-300"
// //           >
// //             Login
// //           </Link>
// //         </>
// //       )}
// //       {loginCheck && (
// //         <>
// //           <Link
// //             to={`/profile/${username}`}
// //             className="px-4 py-2 rounded-lg bg-slate-700 text-gray-200 font-medium hover:bg-slate-600 hover:shadow-md hover:shadow-slate-400/30 transition-all duration-300"
// //           >
// //             Profile
// //           </Link>
// //           <button
// //             onClick={handleLogout}
// //             className="px-4 py-2 rounded-lg bg-neutral-700 text-gray-200 font-medium hover:bg-neutral-600 hover:shadow-md hover:shadow-neutral-400/30 transition-all duration-300"
// //           >
// //             Logout
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   </div>
// // );




  return (
  <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 text-white shadow-md">

    {/* Logo / Brand */}
    <h2 className="text-2xl font-bold tracking-wide hover:text-purple-200 transition">
      <Link to="/">allmil</Link>
    </h2>

    {/* Navigation */}
    <div className="flex items-center space-x-8 text-lg font-medium">
      <h4 className="hover:text-purple-300 transition">
        <Link to="/weapon">Weapons</Link>
      </h4>
      <h4 className="hover:text-purple-300 transition">
        <Link to="/blog">Blogs</Link>
      </h4>
      <h4 className="hover:text-purple-300 transition">
        <Link to="/discuss">Discuss</Link>
      </h4>
      <h4 className="hover:text-purple-300 transition">
        <Link to="/yourweb">LaunchPad</Link>
      </h4>
      <h4 className="hover:text-purple-300 transition">
        <Link to="/pro">Premium</Link>
      </h4>
    </div>

    {/* Right Side: Auth Section */}
    <div className="flex items-center space-x-4">
      {!loginCheck && (
        <>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-1.5 rounded-lg shadow transition">
            <Link to="/signup">Signup</Link>
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 px-4 py-1.5 rounded-lg shadow transition">
            <Link to="/login">Login</Link>
          </button>
        </>
      )}

      {loginCheck && (
        <>
          {/* Profile Button with Image */}
          <Link
            to={`/profile/${username}`}
            className="flex items-center bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded-lg shadow transition space-x-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="w-6 h-6 rounded-full border border-purple-400"
            />
            <span>Profile</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-purple-500 hover:bg-purple-600 px-4 py-1.5 rounded-lg shadow transition"
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>
);





  }

  export default Header