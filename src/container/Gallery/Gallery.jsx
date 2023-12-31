import React, { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Gallery.css'

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left')
      current.scrollLeft -= 300
    else
      current.scrollLeft += 300
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: 'var(--color-grey)', marginTop: '2rem' }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {images.gallery.map((img, i) =>
            <div className='app__gallery-images_card flex__center' key={`gallery-img-${i}`}>
              <img src={img} alt='gallery-item' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          )}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
