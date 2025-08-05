import React from 'react'
import Contant from '../Pages/Contant';
import { Outlet } from 'react-router-dom';
const Contactlayout = () => {
  return (
    <div>
      <Contant />
      <Outlet />
    </div>
  )
}

export default Contactlayout;