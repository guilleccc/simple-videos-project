import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './NavigationBar';
import VideoPlayer from './VideoPlayer';
import Menu from './Menu';

function Index() {
  return <VideoPlayer />;
}

function About() {
  return <h2>About</h2>;
}

class App extends Component {

  render() {
    return (
      <Router>
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
                
                <Route path="/" exact component={Index} />
                <Route path="/components/" component={About} />
              </Col>
              <Col xs="auto">
              </Col>
            </Row>
            

          </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
