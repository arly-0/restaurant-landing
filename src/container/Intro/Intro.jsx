import React, { useState, useRef } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const video = useRef()

  const handleVideo = () => {
    setPlayVideo(!playVideo)

    if (playVideo)
      video.current.pause()
    else
      video.current.play()

  }

  return (
    <div className='app__video'>
      <video src={meal} ref={video} type='video/mp4' loop controls={false} muted />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {playVideo ?
            <BsPauseFill color='var(--color-white)' fontSize={30} />
            :
            <BsFillPlayFill color='var(--color-white)' fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
}

export default Intro
