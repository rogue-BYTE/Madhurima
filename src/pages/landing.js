import React from 'react'
import './landing.css'
import BgVideo from './landing.mp4';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="Landing">
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="landing-content">
        <div className='name'>
          Madhurima Ekka
        </div>
        <div className='landing-details'>
          <div>Creative Stylist</div>
          <div>Brand Management</div>
        </div>
        <div className='landing-controls'>
          <Link
            to='/explore'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <button className='explore-button'>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
