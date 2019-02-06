import React, { Component } from "react";
import { withMediaProps } from "react-media-player";

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  renderIcon() {
    const { media } = this.props;

    if (media.isPlaying) {
      return <i onClick={this._handlePlayPause} className="fas fa-pause" />;
    } else {
      return <i onClick={this._handlePlayPause} className="fas fa-play" />;
    }
  }

  render() {
    return <div>{this.renderIcon()}</div>;
  }
}

export default withMediaProps(CustomPlayPause);
