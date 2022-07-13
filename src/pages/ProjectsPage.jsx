import React from "react";
import { Row, Col } from "react-bootstrap";
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
    }
  ];
  
  return (
    <div className="container-lg Container_Page">
      <h1>Projetos</h1>
      <div className="Cards_Space">
      <Row xs={1} md={2} className="g-4">
        {projects.map(project => (
          <Col>
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
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
}