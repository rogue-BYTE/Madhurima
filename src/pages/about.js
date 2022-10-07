import React from 'react'
import ExploreHeader from '../components/exploreHeader'
import Footer from '../components/footer'
import './about.css'

function About() {
  return (
    <div class='About'>
      <ExploreHeader />
      <div className='about-container'>
        <div className='image-wrapper'>
          <img
            src={`${process.env.PUBLIC_URL + '/profile.JPEG'}`}
            alt=''
            style={{borderRadius: '50%'}}
            height='300px'
            width='300px'
          />
        </div>
        <div className='about-me shadow'>
          <div className='about-me-title'>About Me</div>
          <div className='about-me-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className='contact'>
        <div className='contact-title'>Get in Touch</div>
        <div className='contact-palette'>
          <a href='mailto:madhurimaekka1@gmail.com'>
            <img
              src={`${process.env.PUBLIC_URL + '/gmail.png'}`}
              alt=''
              style={{opacity: '0.5'}}
              height='90px'
              width='90px'
            />
          </a>
          <a href='https://www.instagram.com/madhurima_ekka/'>
            <img
              src={`${process.env.PUBLIC_URL + '/instagram.png'}`}
              alt=''
              style={{opacity: '0.5'}}
              height='90px'
              width='90px'
            />
          </a>
          <a href='https://www.linkedin.com/in/madhurima-ekka-a8696521a/'>
            <img
              src={`${process.env.PUBLIC_URL + '/linkedIn.png'}`}
              alt=''
              style={{opacity: '0.5'}}
              height='90px'
              width='90px'
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
