import React, { useState } from 'react';
import AboutPage from '../components/AboutPage';

export default function ContactMe() {
  const [ email, setEmail ] = useState('');
  return (
    <div id="contato" className='container-lg Container_Page'>
      <div>
        <section className="jumbotron text-center sec">
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
                {/* <label>
                  <div>
                    Entre em contato comigo enviando um email:
                  </div>
                  <div>
                    <textarea name="textEmail" rows="10" onChange={ (e) => setEmail( e.target.value )} />
                  </div>
                </label> */}
                  <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="submit" value="Enviar" />
              </form>
          </div>
        </section>
      </div>

    </div>
  )
}
