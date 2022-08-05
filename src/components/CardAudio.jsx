import React from 'react'
import '../styles/Components/CardAudio.css'

export default function CardAudio() {
  return (
    <div className='audio-card'>
      <audio  id="audio" preload="auto" controls autoplay muted loop>
        <source src="./src/assets/melodic-techno-03-extended-version-moogify-9867.mp3" type="audio/mp3" />
        seu navegador não suporta HTML5!
      </audio>
    </div>
  )
}
 