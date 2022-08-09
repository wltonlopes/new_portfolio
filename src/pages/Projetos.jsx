import React, { useState } from 'react'
import { projects } from '../utils/data'
import '../styles/pages/Projetos.css'

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
      <div className='card-p'>
          {
          <div className='card-project'>
            <div>
              <h2>{projects[ind].name}</h2>
                <img src={projects[ind].image} alt={projects[ind].name} />
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

