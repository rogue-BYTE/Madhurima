import React from 'react'
import './exploreHeader.css'
import { Link, useLocation } from 'react-router-dom'

function ExploreHeader() {
  const activeRoute = useLocation().pathname;
  return (
    <div className='ExploreHeader'>
      <div className='nav-item-container'>
        <div className='nav-name'>
          <Link
            to='/'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Madhurima Ekka
          </Link>
        </div>
      </div>
      <div className='nav-item-container'>
        <Link
          className={"nav-item " + (activeRoute === '/explore' ? 'nav-item-active' : '')}
          to='/explore'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Explore
        </Link>
        <Link
          className={"nav-item " + (activeRoute === '/about' ? 'nav-item-active' : '')}
          to='/about'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          About
        </Link>
      </div>
    </div>
  )
}

export default ExploreHeader
