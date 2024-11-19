import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { UpdateProvider } from './context/UpdateContext.jsx'

function Layout() {
  return (
    <div>
      <UpdateProvider>
        <Header />
        <Outlet />
      </UpdateProvider>
    </div>
  )
}

export default Layout