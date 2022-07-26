import React, { useState } from 'react';

export default function ContactMe() {
  const [ email, setEmail ] = useState('');
  return (
    <div className='container-lg Container_Page'>
      <div>
        <section className="centralizar">
          <div className="container page-container text-box">
              <h1 id="contato" className="jumbotron-heading">Entre em contato comigo</h1>
              <form action="https://formsubmit.co/weltonlopesmetal@gmail.com" method="POST" className='contato_block'>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required/>
                <br/>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" required/>
                <br/>
                <label for="mensagem">Mensagem:</label>
                <textarea name="mensagem" rows="5" cols="20" id="mensagem" required ></textarea>
                  <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="submit" value="Enviar" className="submit_btn"/>
              </form>
          </div>
        </section>
      </div>

    </div>
  )
}
