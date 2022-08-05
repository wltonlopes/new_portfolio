import React from 'react'
import '../styles/pages/Sobre.sass'
import { FaLinkedin, FaGithub, FaWhatsapp, FaSpaceShuttle } from 'react-icons/fa'
import CardAudio from '../components/CardAudio';


const icons = [
  { name: 'linkedin', link: 'https://www.linkedin.com/in/welton-santo-lopes/', icon: <FaLinkedin /> },
  { name: 'github', link: 'https://github.com/wltonlopes', icon: <FaGithub /> },
  { name: 'phone', link: 'https://api.whatsapp.com/send?phone=+5511946820302', icon: <FaWhatsapp /> },
];

export default function Sobre() {
  return (
    <div className='container'>
      <CardAudio/>
      <div id="home" className='container-text'>
        <div>
          <h1>
            Olá meu nome é Welton Lopes e eu sou um desenvolvedor Front End! Focado nas tecnologias React, JavaScript e NodeJS.
          </h1>
          <div className='margin-icon'>
            <div>
              {
                icons.map(icon => (
                  <a
                    className='icone'
                    href={icon.link}
                    id={icon.name}
                    key={icon.name}
                    target="_blank"
                  >
                    {icon.icon}
                  </a>
                ))
              }

            </div>
          </div>
        </div>
        <div>
          <img
            className='img-sobre'
            src="https://avatars.githubusercontent.com/u/39802614?v=4"
            alt="Welto Lopes"  
          />
        </div>
      </div>
    </div>
  )
}
