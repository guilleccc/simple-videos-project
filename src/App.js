import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import TopBar from './components/TopBar';
import SideMenu from './components/SideMenu';
import VideoPage from './routes/VideoPage';
import './App.scss';
import './theme.scss';

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About</h2>;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5be2fc042f00006d00ca21f6')
      .then(r => r.json())
      .then(json => {
        this.setState({
          categories: (json && json.result) || []
        });
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <Router>
        <div className="App">
          <TopBar categories={categories} />
          <div className="AppContainer">
          <Container fluid>
            <Row>
              <Col xs="0" md="3">
                <SideMenu categories={categories} />
              </Col>
              <Col xs="12" md="9">
                <div className="App-main">
                  <Route path="/" exact component={Home} />
                  <Route path="/about/" component={About} />
                  <Route path="/category/:id" component={VideoPage} />
                </div>
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
