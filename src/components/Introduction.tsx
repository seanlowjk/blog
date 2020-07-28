import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

type IntroductionProps = {
  title: string;
  subtitle: string;
};

function Introduction(props: IntroductionProps) {
  const { title, subtitle } = props;

  return (
    <div className="Introduction" id="home">
      <Jumbotron className="main-hero">
        <Container className="main-container">
          <h1 className="container-header">{title}</h1>
          <h4 className="container-description"> {subtitle} </h4>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Introduction;
