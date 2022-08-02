import React from 'react'
import '../styles/Components/CardAudio.sass'

export default function CardAudio() {
  return (
    <div className='audio-card'>
      <audio  id="audio" preload="auto" controls autoplay muted loop>
        <source src="./src/assets/80 - Flauta (mp3cut.net).mp3" type="audio/mp3" />
        seu navegador não suporta HTML5
      </audio>
    </div>
  )
}
 