import React from 'react';
import NavBar from './components/NavBar'
import Contatos from './pages/Contatos';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Stacks from './pages/Stacks';
import './styles/App.sass'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Sobre/>
      <Stacks/>
      <Projetos/>
      <Contatos/>
    </div>
  )
}

export default App
