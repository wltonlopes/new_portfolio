import React from "react";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Welto Lopes",
      description: "Projeto de um site para a empresa Welto Lopes",
      image: "https://i.imgur.com/XqQXQZb.png",
      link: "https://welto.com.br/",
      stack: "React, Bootstrap",
      github: ""
    },
    {
      name: "Welto Lopes",
      description: "Projeto de um site para a empresa Welto Lopes",
      image: "https://i.imgur.com/XqQXQZb.png",
      link: "https://welto.com.br/",
      stack: "React, Bootstrap, NodeJS, Express, MongoDB, Mongoose, MongoDB Atlas, Heroku",
      github: ""
    },
    {
      name: "Welto Lopes",
      description: "Projeto de um site para a empresa Welto Lopes",
      image: "https://i.imgur.com/XqQXQZb.png",
      link: "https://welto.com.br/",
      stack: "React, Bootstrap, NodeJS, Express, MongoDB, Mongoose, MongoDB Atlas, Heroku",
      github: ""
    }
  ];
  return (
    <div className="Container_Page">
      <h1>Projetos</h1>
      <div className="Cards_Space">

      <CardGroup>
        {projects.map(project => (
          <Card key={project.name}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{project.stack}</small>
              <small className="text-muted">Link github {project.github} </small>
            </Card.Footer>
          </Card>
        ))}
        </CardGroup>
      </div>
    </div>
  );
}