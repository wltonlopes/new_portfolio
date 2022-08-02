import React from 'react';
import '../styles/Components/NavBar.sass';

export default function NavBar() {
  return (
    <nav className='NavBar'>
        <div>
          <h1>Welton Lopes</h1>
        </div>
        <a href='#sobre'>Sobre Mim</a>
        <a href='#stacks'>Stacks</a>
        <a href='#projetos'>Projetos</a>
        <a href='#contatos'>Contanto</a>
    </nav>
  )
}
