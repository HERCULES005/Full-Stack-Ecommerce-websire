import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font font-medium'>
      Navbar
      <img src={assets.logo} className='w-36' alt=""  />
    </div>
  )
}

export default Navbar