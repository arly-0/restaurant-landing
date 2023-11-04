import React from 'react'
import { images, data } from '../../constants'
import './Laurels.css'
import { SubHeading } from '../../components'

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map(award => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
)

export default Laurels



const AwardCard = ({ award }) => (
  <div className='app__laurels_awards-card'>
    <img src={award.imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: 'var(--color-golden)' }}>{award.title}</p>
      <p className='p__cormorant'>{award.subtitle}</p>
    </div>
  </div>
)