import React, { useState } from "react";
import { FaReact, FaGit, FaHtml5, FaPython, FaCss3, FaDatabase, FaJsSquare } from "react-icons/fa";
import '../styles/pages/Stacks.sass'


export default function Stacks() {

  const [skills, setSkills] = useState('React');

  const skillsDescription = [
    { name: 'React', description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.' },
    { name: 'JavaScript', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Git', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'HTML5', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Python', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { name: 'CSS3', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name: 'MySQL', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
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
