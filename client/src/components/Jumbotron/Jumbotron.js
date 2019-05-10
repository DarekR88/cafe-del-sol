import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { XNav } from '../XNav'
// import './Jumbotron.css';

const Logo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Practice Page</h1>
          <p className="lead">123 Info Here.</p>
          <XNav />
        </Container>
      </Jumbotron>
    </div>
  );
};

export { Logo };