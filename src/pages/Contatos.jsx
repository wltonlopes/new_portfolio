import React from 'react'
import '../styles/pages/Contatos.css'
import { FaLinkedin, FaGithub, FaWhatsapp, FaSpaceShuttle } from 'react-icons/fa'

export default function Contatos() {
  return (
    <div
      className='container contatos-style'
      id='contatos'
    >
      <h1>
        Entre em Contanto comigo:
      </h1>
      <div className='contatos'>
        <div>
          <a
            href='mailto:weltonlopesmetal@gmail.com'
          >
            <span>
              <FaSpaceShuttle />
              : weltonlopesmetal@gmail.com
            </span>
          </a>

          <a
            href='https://www.linkedin.com/in/welton-santo-lopes/'
          >
            <span>
              <FaLinkedin />
              : https://www.linkedin.com/in/welton-santo-lopes/
            </span>
          </a>

        </div>
        <div>
          <a
            href='https://github.com/wltonlopes'
          >
            <span>
              <FaGithub />
              : https://github.com/wltonlopes
            </span>
          </a>

          <a
            href='https://api.whatsapp.com/send?phone=+5511946820302'
          >
            <span>
              <FaWhatsapp />
              : +55 (11) 94682-0302
            </span>
          </a>
        </div>

      </div>
    </div>

  )
}
