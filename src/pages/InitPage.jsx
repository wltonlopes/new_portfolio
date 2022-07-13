import React from "react";

export default function InitPage() {
  return (
    <div className="container-lg Container_Page">
      <div class="row">
          <div class="col-md-6">
          <h1>
            Olá meu nome é Welton Lopes e eu sou um desenvolvedor Front End! Focado nas tecnologias React, JavaScript e NodeJS.
          </h1>
          <a 
          href='https://www.linkedin.com/in/welton-santo-lopes/' 
          alt='Link para o linkerdin' 
          target="_blank" 
          rel="noopener noreferrer"
          >
            <button> Meu Linkerdin </button>
          </a>
        </div>
        <div class="col-md-6">
          <img 
          className="img-fluid"
          src="https://avatars.githubusercontent.com/u/39802614?v=4" 
          alt="Welto Lopes" 
          />
        </div>
        </div>
      </div>
  );
}