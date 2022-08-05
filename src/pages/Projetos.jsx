import React, { useState } from 'react'
import { projects } from '../utils/data'
import '../styles/pages/Projetos.sass'

export default function Projetos() {
  let [ind, setind] = useState(0);
  
  function ContarSegundos() {
    setInterval(() => {
      if(ind === 0){
        setind(1);
      }
      if(ind === 1){
        setind(2);
      }
      if(ind === 2){
        setind(0);
      }
    }, 10000);
  }
  ContarSegundos();

  return (
    <div id="projetos" className="container">
      <h1>Projetos</h1>
      <div>
          {
          <div className='card-project'>
            <div>
              <h2>{projects[ind].name}</h2>
              <a href={projects[ind].link} target="_blank">
                <img src={projects[ind].image} alt={projects[ind].name} />
              </a>
            </div>
            <div className='projeto-text'>
              <p>{projects[ind].description}</p>
              <p>{projects[ind].stack}</p>
            </div>
          </div>
          }
      </div>
    </div>
  );
}

