import React from 'react'
import './explore.css'
import ExploreHeader from '../components/exploreHeader'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Explore() {
  return (
    <div className='Explore'>
      <ExploreHeader />
      <div className='work-container var-3'>
        <div className='image-wrapper'>
          <div className='work-title'>
            Magazine
          </div>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            width='350px'
            height='400px'
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL + '/work-1.jpg'}`}
                alt=''
                width='350px'
                height='400px'
              />
              <p className="legend">Lorem Ipsum</p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL + '/work-2.jpg'}`}
                alt=''
                width='350px'
                height='400px'
              />
              <p className="legend">consectetur adipiscing</p>
            </div>
          </Carousel>
        </div>
        <div className='work-details'>
          <div className='work-details-content var-4 shadow'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className='work-container var-2'>
        <div className='image-wrapper var-4'>
          <div className='work-title'>
            Editorials
          </div>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            width='350px'
            height='400px'
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL + '/work-1.jpg'}`}
                alt=''
                width='350px'
                height='400px'
              />
              <p className="legend">Lorem Ipsum</p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL + '/work-2.jpg'}`}
                alt=''
                width='350px'
                height='400px'
              />
              <p className="legend">consectetur adipiscing</p>
            </div>
          </Carousel>
        </div>
        <div className='work-details'>
          <div className='work-details-content var-1 shadow'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
