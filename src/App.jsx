import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { Home, Blog, LaunchPad, Premium, Weapon, Discuss, Login, Signup, Posts, Createpost, Article } from './pages/index.js'
import EditPost from './pages/blog/EditPost.jsx'
import Profile from './pages/profile/Profile.jsx'
import { UserProvider } from './context/UserContext.jsx'
import DisplayTopic from './pages/discussion/DisplayTopic.jsx'
import Feed from './pages/discussion/Feed.jsx'


function App() {
  

  return (
    <div className=''>
      <UserProvider>

      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
             <Route index element={<Home/> } />
             <Route path='discuss' element={<Discuss />}>
                <Route path='' element={<Feed />} />
                <Route path=':slug' element={<DisplayTopic />} />
             </Route>
             {/* <Route path='/discuss/:uuid' element={<DisplayTopic />} /> */}
             <Route path='weapon' element={<Weapon />} />
             <Route path='profile/:username' element={<Profile />} />
             <Route path='blog' element={<Blog />}>
                <Route path='allpost' element={<Posts />} />
                <Route path='create' element={<Createpost />} />
                <Route path=':slug' element={<Article />} />
                <Route path=':slug/edit' element={<EditPost/>} />
             </Route>
             <Route path='pro' element={<Premium />} />
             <Route path='yourweb' element={<LaunchPad />} />
             <Route path='login' element={<Login />} /> 
             <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </Router>

      </UserProvider>

      {/* <Header />
      <Signup />
      <Login />
      <Createpost /> */}

      {/* <Posts /> */}
    </div>
  )
}

export default App
