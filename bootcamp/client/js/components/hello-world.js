import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export class HelloWorld extends React.Component {

  render() {
    return <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Hello World!</h1>
        <p className="lead">Welcome to React + Redux!</p>
      </Container>
    </Jumbotron>;
  }
}
