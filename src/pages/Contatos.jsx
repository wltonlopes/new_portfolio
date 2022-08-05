import React from 'react'
import '../styles/pages/Contatos.sass'

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
        <a
          href='mailto:weltonlopesmetal@gmail.com'
        >
          <span>
            Meu Email: weltonlopesmetal@gmail.com
          </span>
        </a>

        <a
          href='https://www.linkedin.com/in/welton-santo-lopes/'
        >
          <span>
            Meu Linkerdin: https://www.linkedin.com/in/welton-santo-lopes/
          </span>
        </a>

        <a
          href='https://github.com/wltonlopes'
        >
          <span>
            Meu GitHub: https://github.com/wltonlopes
          </span>
        </a>

        <a
          href='https://api.whatsapp.com/send?phone=+5511946820302'
        >
          <span>
            Meu Whatsapp: (011) 95958-6731
          </span>
        </a>

      </div>
    </div>

  )
}
