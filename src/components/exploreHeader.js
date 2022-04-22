import React from 'react'
import './exploreHeader.css'
import { Link } from 'react-router-dom'

function ExploreHeader() {
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
          className='nav-item'
          to='/explore'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Explore
        </Link>
        <Link
          className='nav-item'
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
