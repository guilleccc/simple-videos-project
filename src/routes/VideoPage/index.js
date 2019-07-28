import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import VideoPlayer from '../../components/VideoPlayer';


class VideoPage extends Component {

  render() {
    return (
      <Container fluid>
          <Row>
            <Col xs="12">
              <h1>Category</h1>
              <VideoPlayer title="Example" description="Description" />
              <VideoPlayer title="Example" description="Description" />
            </Col>
          </Row>
        </Container>
      
    );
  }
}

export default VideoPage;
