import React, { useState } from 'react';
import '../styles/Components/CardText.sass';

export default function CardText() {
  let [count, setCount] = useState(0);
  let arrayAreas = [ 'Desenvolvedor', 'Estudante', 'Designer'];

  
  function ContarSegundos() {
    setInterval(() => {
      if(count === 0){
        setCount(1);
      }
      if(count === 1){
        setCount(2);
      }
      if(count === 2){
        setCount(0);
      }
    }, 10000);
  }
  ContarSegundos();

  return (
    <div>
      <h1>Eu sou Welton Lopes e eu sou:</h1>
      <h1 className='suave-mudanca'>{arrayAreas[count]}</h1>
    </div>
  )
}
