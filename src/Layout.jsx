import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { UpdateProvider } from './context/UpdateContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

function Layout() {
  return (
    <div>
      <UpdateProvider>
        <UserProvider>
          <Header />
          <Outlet />
        </UserProvider>
      </UpdateProvider>
    </div>
  )
}

export default Layout