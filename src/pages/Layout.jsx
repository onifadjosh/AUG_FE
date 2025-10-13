import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex w-100' style={{height:'100vh'}}>
        <div className='sidebar bg-primary' style={{flexBasis:'30%'}}>

        </div>

        <div className='main-content'>

        <Outlet/>
        {/*  without this outlet we wont be able to display what is coming from the child route */}
        </div>
    </div>
  )
}

export default Layout