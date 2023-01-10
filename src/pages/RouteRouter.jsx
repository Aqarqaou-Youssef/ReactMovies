import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

function RouteRouter() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default RouteRouter