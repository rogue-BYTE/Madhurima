import React from 'react'
import ExploreHeader from '../components/exploreHeader'
import Footer from '../components/footer'
import './about.css'

function About() {
  return (
    <div class='About'>
      <ExploreHeader />
      <div className='about-container'>
        <div className='left-section'>
          <img
            src={`${process.env.PUBLIC_URL + '/profile.JPEG'}`}
            alt=''
            style={{borderRadius: '50%'}}
            height='250px'
            width='250px'
          />
          <h1 style={{ color: 'grey' }}>Get in touch !</h1>
          <div className='contact-container'>
            <a href='mailto:madhurimaekka1@gmail.com'>
              <img
                src={`${process.env.PUBLIC_URL + '/gmail.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='60px'
                width='60px'
              />
            </a>
            <a href='https://www.instagram.com/madhurima_ekka/'>
              <img
                src={`${process.env.PUBLIC_URL + '/instagram.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='60px'
                width='60px'
              />
            </a>
            <a href='https://www.linkedin.com/in/madhurima-ekka-a8696521a/'>
              <img
                src={`${process.env.PUBLIC_URL + '/linkedIn.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='60px'
                width='60px'
              />
            </a>
          </div>
        </div>
        <div className='right-section'>
          <div className='about-me shadow'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
