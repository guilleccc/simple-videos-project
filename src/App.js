import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import NavigationBar from './NavigationBar';
import VideoPlayer from './VideoPlayer';
import Menu from './Menu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="App-header">
        <Container>
          <Row>
            <Col xs="0" sm="3">
              <Menu />
            </Col>
            <Col xs="12" sm="9">
              <h1>Title</h1>
              <VideoPlayer />
            </Col>
            <Col xs="auto">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Button color="danger">Do something!</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
          <Row>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col sm="4">.col-sm-4</Col>
          </Row>

        </Container>
        </div>
      </div>
    );
  }
}

export default App;
