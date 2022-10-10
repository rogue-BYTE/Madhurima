import React from 'react'
import { useState } from 'react'
import './explore.css'
import ExploreHeader from '../components/exploreHeader'
import Footer from '../components/footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Explore() {
  let galleryMenuOptions = ['COVERS', 'EDITORIALS', 'CAMPAIGNS', 'CATALOGUE'];
  const [tab, setTab] = useState('COVERS');
  const [showDropdown, setVisibility] = useState(false);

  const covers_1 = [
    {
      src: 'cover1_1.jpg',
      type: 'img'
    },
    {
      src: 'cover1_2.jpg',
      type: 'img'
    },
    {
      src: 'cover1_3.jpg',
      type: 'img'
    },
  ]
  const covers_2 = [
    {
      src: 'cover2_1.jpg',
      type: 'img'
    },
    {
      src: 'cover2_2.jpg',
      type: 'img'
    },
    {
      src: 'cover2_3.mp4',
      type: 'vid'
    },
  ]
  const covers_3 = [
    {
      src: 'cover3_1.mp4',
      type: 'vid'
    },
    {
      src: 'cover3_2.jpg',
      type: 'img'
    },
    {
      src: 'cover3_3.jpg',
      type: 'img'
    },
  ]
  const covers_4 = [
    {
      src: 'cover4_1.jpg',
      type: 'img'
    },
    {
      src: 'cover4_2.jpg',
      type: 'img'
    },
    {
      src: 'cover4_3.jpg',
      type: 'img'
    },
  ]
  const covers_5 = [
    {
      src: 'cover5_1.mp4',
      type: 'vid'
    },
    {
      src: 'cover5_2.jpg',
      type: 'img'
    },
    {
      src: 'cover5_3.jpg',
      type: 'img'
    },
  ]

  const editorials_1 = [
    {
      src: 'edi1_1.jpg',
      type: 'img'
    },
    {
      src: 'edi1_2.jpg',
      type: 'img'
    },
    {
      src: 'edi1_3.jpg',
      type: 'img'
    },
    {
      src: 'edi1_4.jpg',
      type: 'img'
    },
    {
      src: 'edi1_5.jpg',
      type: 'img'
    },
  ]
  const editorials_2 = [
    {
      src: 'edi2_1.jpg',
      type: 'img'
    },
    {
      src: 'edi2_2.jpg',
      type: 'img'
    },
    {
      src: 'edi2_3.jpg',
      type: 'img'
    },
    {
      src: 'edi2_4.jpg',
      type: 'img'
    },
    {
      src: 'edi2_5.jpg',
      type: 'img'
    },
  ]
  const editorials_3 = [
    {
      src: 'edi3_1.jpg',
      type: 'img'
    },
    {
      src: 'edi3_2.jpg',
      type: 'img'
    },
    {
      src: 'edi3_3.jpg',
      type: 'img'
    },
    {
      src: 'edi3_4.jpg',
      type: 'img'
    },
    {
      src: 'edi3_5.jpg',
      type: 'img'
    },
  ]
  const editorials_4 = [
    {
      src: 'edi4_1.jpg',
      type: 'img'
    },
    {
      src: 'edi4_2.jpg',
      type: 'img'
    },
    {
      src: 'edi4_3.jpg',
      type: 'img'
    },
    {
      src: 'edi4_4.jpg',
      type: 'img'
    },
    {
      src: 'edi4_5.jpg',
      type: 'img'
    },
  ]
  const editorials_5 = [
    {
      src: 'edi5_1.jpg',
      type: 'img'
    },
    {
      src: 'edi5_2.jpg',
      type: 'img'
    },
    {
      src: 'edi5_3.jpg',
      type: 'img'
    },
    {
      src: 'edi5_4.jpg',
      type: 'img'
    },
    {
      src: 'edi5_5.jpg',
      type: 'img'
    },
  ]
  const campaigns_1 = [
    {
      src: 'cam1_1.jpg',
      type: 'img'
    },
    {
      src: 'cam1_2.mp4',
      type: 'vid'
    },
    {
      src: 'cam1_3.jpg',
      type: 'img'
    },
  ]
  const campaigns_2 = [
    {
      src: 'cam2_1.mp4',
      type: 'vid'
    },
    {
      src: 'cam2_2.jpg',
      type: 'img'
    }
  ]
  const campaigns_3 = [
    {
      src: 'cam3_1.jpg',
      type: 'img'
    },
    {
      src: 'cam3_2.jpg',
      type: 'img'
    },
    {
      src: 'cam3_3.jpg',
      type: 'img'
    }
  ]
  const campaigns_4 = [
    {
      src: 'cam4_1.jpg',
      type: 'img'
    },
    {
      src: 'cam4_2.mp4',
      type: 'vid'
    }
  ]
  const campaigns_5 = [
    {
      src: 'cam5_1.mp4',
      type: 'vid'
    },
    {
      src: 'cam5_2.jpg',
      type: 'img'
    },
    {
      src: 'cam5_3.jpg',
      type: 'img'
    },
  ]
  const catalogues_1 = [
    {
      src: 'cat1_1.jpg',
      type: 'img'
    },
    {
      src: 'cat1_2.jpg',
      type: 'img'
    }
  ];
  const catalogues_2 = [
    {
      src: 'cat2_1.jpg',
      type: 'img'
    },
    {
      src: 'cat2_2.mp4',
      type: 'vid'
    },
  ];
  const catalogues_3 = [
    {
      src: 'cat3_1.jpg',
      type: 'img'
    },
    {
      src: 'cat3_2.jpg',
      type: 'img'
    }
  ];
  const catalogues_4 = [
    {
      src: 'cat4_1.jpg',
      type: 'img'
    },
    {
      src: 'cat4_2.jpg',
      type: 'img'
    }
  ];
  const catalogues_5 = [
    {
      src: 'cat5_1.jpg',
      type: 'img'
    },
    {
      src: 'cat5_2.jpg',
      type: 'img'
    }
  ]
  return (
    <div className='Explore'>
      <ExploreHeader />
      <div className="gallery-menu">
        {galleryMenuOptions.map(option => 
          <div
            className={'gallery-menu-item ' + (tab === option ? "gallery-menu-item-active " : "") + (galleryMenuOptions[galleryMenuOptions.length -1] !== option ? 'has-margin-right': '')}
            onClick={() => setTab(option)}
          >
            <span>{option}</span>
          </div>
        )}
        <LazyLoadImage
          onClick={() => setVisibility(!showDropdown)}
          className="menu-icon"
          src={`${process.env.PUBLIC_URL + '/menu.svg'}`}
          alt=""
        />
        { showDropdown && <div className='gallery-menu-dropdown'>
          {galleryMenuOptions.map(option => 
            <div
              onClick={() => {setTab(option); setVisibility(!showDropdown)}}
            >
              {option}
              {galleryMenuOptions[galleryMenuOptions.length -1] !== option && <hr />}
            </div>

          )}
        </div>}
      </div>
      <div class="gallery-container">
      {tab === 'COVERS' &&
        <div class="row">
          <div class="column">
            {covers_1.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {covers_2.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image"  autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {covers_3.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {covers_4.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {covers_5.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
        </div>
      }
      {tab === 'EDITORIALS' &&
        <div class="row">
          <div class="column">
            {editorials_1.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {editorials_2.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image"  autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {editorials_3.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {editorials_4.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {editorials_5.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
        </div>
      }
      {tab === 'CAMPAIGNS' &&
        <div class="row">
          <div class="column">
            {campaigns_1.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {campaigns_2.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image"  autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {campaigns_3.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {campaigns_4.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {campaigns_5.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
        </div>
      }
{tab === 'CATALOGUE' &&
        <div class="row">
          <div class="column">
            {catalogues_1.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {catalogues_2.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image"  autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {catalogues_3.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {catalogues_4.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
          <div class="column">
            {catalogues_5.map(obj => {
              if (obj.type === 'img') {
                return (
                  <LazyLoadImage
                  class="gallery-image"
                  src={`${process.env.PUBLIC_URL}${obj.src}`}
                  alt=''
                  effect="blur"
                />)
              } else {
                return (
                  <video class="gallery-image" autoPlay loop muted>
                    <source src={obj.src} type="video/mp4" />
                  </video>
                )
              }
            })}
          </div>
        </div>
      }
      </div>
      <Footer />
    </div>
  )
}

export default Explore
