import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import './styles.scss';
import logo from '../../assets/poster.jpg';

class VideoPlayer extends Component {
  render() {
    const {title, description} = this.props;

    return (
      <div className="videoplayer">
        <Player
          playsInline
          poster={logo}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <hr />
      </div>
    );
  }
}

export default VideoPlayer;
