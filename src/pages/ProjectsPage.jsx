import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

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
      stack: "React, Bootstrap",
      github: ""
    }
  ];
  
  return (
    <div id="projetos" className="container-lg Container_Page">
      <h1>Projetos</h1>
      <div className="Cards_Space">
      <Carousel>
        {projects.map( proj => (
        <Carousel.Item interval={1000} key={proj.name}>
          <img
            className="d-block w-100"
            src={proj.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </Carousel.Caption>
          <Card>
            <Card.Body>
              <Card.Title>{proj.name}</Card.Title>
              <Card.Text>
                {proj.description}
              </Card.Text>
              <Card.Text>
                {proj.stack}
              </Card.Text>
              <Card.Text>
                {proj.github}
              </Card.Text>
              <Card.Text>
                {proj.link}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        ))}

      </Carousel>
      </div>
    </div>
  );
}