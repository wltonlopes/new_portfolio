import React, { useState } from "react";

export default function SkillsPage() {
  const [skills, setSkills] = useState('React');
  
  const skillsDescription = [
    { name:'React', description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.' },
    { name:'JavaScript', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name:'NodeJS', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name:'Git', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name:'HTML5', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name:'Express', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name:'Python', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { name:'CSS3', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name:'MySQL', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name:'PostgreSQL', description: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
  ]

  const iconsStacks = [
    { name:'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name:'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name:'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name:'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
    { name:'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name:'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name:'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { name:'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name:'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name:'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
  ]

  return (
    <div className="container-lg Container_Page">
      <div class="row">
        <div class="col-md-6">
          <h1 >Minhas Skills</h1>
          <h3 id="lead text-muted">Atualmente possuo/estou desenvolvendo habilidades nessas áreas: </h3>
          <div id='stacks' className="container_stacks">
            {
              iconsStacks.map( icon => (
                <img
                key={icon.name}
                src={icon.icon}
                className="iconsStacks"
                alt={icon.name}
                name={icon.name}
                onClick={() => setSkills(icon.name)}
              />
              )
              )
            }
          </div>
        </div>
        <div class="col-md-6">
          Skill:
          <div>
            <h3>{skills}</h3>
            <p>{skillsDescription.map( desc => desc.name === skills ? desc.description : null )}</p>
          </div>
        </div>
      </div>
    </div>
  );
}