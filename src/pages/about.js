import React from 'react'
import ExploreHeader from '../components/exploreHeader'
import Footer from '../components/footer'
import './about.css'


function About() {
  return (
    <div class='About'>
      <ExploreHeader />
      <div className='about-container'>
        <img
          src={`${process.env.PUBLIC_URL + '/profile.JPEG'}`}
          alt=''
          style={{borderRadius: '50%'}}
          height='250px'
          width='250px'
        />
        <div className='about-info'>
          <div className='about-info-header'>Hi, I am Madhurima Ekka. Nice to meet you!</div>
          <div className='about-info-content'>I’m a freelance Creative Stylist hailing from Central India. I got my Bachelors Degree in Commerce from Delhi University and I also hold a Masters in Fashion Management from NIFT Mumbai. I focus on curating unique styles with an eye for commercial fashion and detail in personal and editorial styling with a proven track record of co-organizing photo shoots and styling models.</div>
          <div className='about-info-content'>Forever a mountain person who is also passionate about Baking and in love with Kawaii Culture.</div>
          <div className='contact-container'>
            <div class="contact-text">Get in Touch</div>
            <div className="contact-icons">
              <a href='mailto:madhurimaekka1@gmail.com' target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL + '/gmail.png'}`}
                  alt=''
                  style={{opacity: '0.5'}}
                  height='50px'
                  width='50px'
                />
              </a>
              <a href='https://www.instagram.com/madhurima_ekka/' target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL + '/instagram.png'}`}
                  alt=''
                  style={{opacity: '0.5'}}
                  height='50px'
                  width='50px'
                />
              </a>
              <a href='https://www.linkedin.com/in/madhurima-ekka-a8696521a/' target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL + '/linkedin.png'}`}
                  alt=''
                  style={{opacity: '0.5'}}
                  height='50px'
                  width='50px'
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className='left-section'>
          <img
            src={`${process.env.PUBLIC_URL + '/profile.JPEG'}`}
            alt=''
            style={{borderRadius: '50%'}}
            height='250px'
            width='250px'
          />
          <h1 style={{ color: 'grey' }}>Get in touch !</h1>
          <div className='contact-container'>
            <a href='mailto:madhurimaekka1@gmail.com' target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL + '/gmail.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='50px'
                width='50px'
              />
            </a>
            <a href='https://www.instagram.com/madhurima_ekka/' target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL + '/instagram.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='50px'
                width='50px'
              />
            </a>
            <a href='https://www.linkedin.com/in/madhurima-ekka-a8696521a/' target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL + '/linkedin.png'}`}
                alt=''
                style={{opacity: '0.5'}}
                height='50px'
                width='50px'
              />
            </a>
          </div>
        </div>
        <div className='right-section'>
          <div className='about-me shadow'>
            <h3>Who I am</h3>
            Hello There! Welcome to my portfolio. I’m a freelance Creative Stylist hailing from Central India. I got my Bachelors Degree in Commerce from Delhi University and I also hold a Masters in Fashion Management from NIFT Mumbai. I focus on curating unique styles with an eye for commercial fashion and detail in personal and editorial styling with a proven track record of co-organizing photo shoots and styling models.
            <br />
            <p>Forever a mountain person who is also passionate about Baking and in love with Kawaii Culture.</p>
          </div>
        </div> */}
      </div> 
      <Footer />
    </div>
  )
}

export default About
