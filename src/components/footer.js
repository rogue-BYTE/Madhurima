import React from 'react'
import './footer.css'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const activeRoute = useLocation().pathname;
  return (
    <div className='footer'>
      Copyright Madhurima Ekka | All Rights Reserved | Designed by Vedant Anand
    </div>
  )
}

export default Footer
