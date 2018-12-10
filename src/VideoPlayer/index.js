import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class VideoPlayer extends Component {
  render() {
    return (
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    );
  }
}

export default VideoPlayer;
