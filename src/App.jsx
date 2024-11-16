import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { Home, Blog, LaunchPad, Premium, Weapon, Discuss, Login, Signup, Posts, Createpost, Article } from './pages/index.js'


function App() {
  

  return (
    <div className=''>

      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
             <Route index element={<Home/> } />
             <Route path='discuss' element={<Discuss />} />
             <Route path='weapon' element={<Weapon />} />
             <Route path='blog' element={<Blog />}>
                <Route path='allpost' element={<Posts />} />
                <Route path='create' element={<Createpost />} />
                <Route path=':slug' element={<Article />} />            
             </Route>
             <Route path='pro' element={<Premium />} />
             <Route path='yourweb' element={<LaunchPad />} />
             <Route path='login' element={<Login />} /> 
             <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </Router>


      {/* <Header />
      <Signup />
      <Login />
      <Createpost /> */}

      {/* <Posts /> */}
    </div>
  )
}

export default App
