import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import PostCard from './components/PostCard'
import Posts from './pages/Posts'
import Signup from './pages/Signup'

import Login from './pages/Login'
import Createpost from './pages/Createpost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Signup />
      <Login />
      <Createpost />

      {/* <Posts /> */}
    </div>
  )
}

export default App
