import React, { useState } from "react";
import { FaReact, FaGit, FaHtml5, FaPython, FaCss3, FaDatabase, FaJsSquare } from "react-icons/fa";
import '../styles/pages/Stacks.css'


export default function Stacks() {

  const [skills, setSkills] = useState('React');

  const skillsDescription = [
    { name: 'React', description: 'React é uma biblioteca JavaScript para construir interfaces de usuário. É mantido pelo Facebook e uma comunidade de desenvolvedores e empresas individuais.' },
    { name: 'JavaScript', description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. ' },
    { name: 'Git', description: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, salvando o histórico de edições de todos arquivos arquivo.' },
    { name: 'HTML5', description: 'Html 5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.' },
    { name: 'Python', description: 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.' },
    { name: 'CSS3', description: 'Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.' },
    { name: 'MySQL', description: 'Bancos de dados relacionais.' },
  ]

  const iconsStacks = [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'MySQL', icon: <FaDatabase /> },
  ]

  return (
    <div className='container'>
      <div className="container-text">
        <div id="stacks">
          <h1 >Minhas Skills</h1>
          <h3>Atualmente possuo/estou desenvolvendo habilidades nessas áreas: </h3>
          <br/>
          <br/>
          <div className="container-stacks">
            {
              iconsStacks.map(icon => (
                <a
                  key={icon.name}
                  className="icons-stacks"
                  alt={icon.name}
                  name={icon.name}
                  onClick={() => setSkills(icon.name)}
                >
                  {icon.icon}
                </a>
              )
              )
            }
          </div>
        </div>
        <div className="a">
          <div className="centralizar">
            <h3>{skills}</h3>
            <p >{skillsDescription.map(desc => desc.name === skills ? desc.description : null)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
