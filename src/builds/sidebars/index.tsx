import React from 'react'
import Sidebar_Motion from './Sidebar_Motion'
import Sidebar_Orb from './Sidebar_Orb'

const Sidebar = () => {
  return (
    <div className='mt-10 grid grid-col-1 md:grid-col-2'>
        <Sidebar_Motion />
        <Sidebar_Orb />
    </div>
  )
}

export default Sidebar