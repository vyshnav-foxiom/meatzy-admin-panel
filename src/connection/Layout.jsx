
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Layout