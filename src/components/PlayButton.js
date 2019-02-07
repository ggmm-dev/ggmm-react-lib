import React, { Component } from "react";
import styled from "styled-components";

import { Media, Player, controls, utils } from "react-media-player";
const { CurrentTime, SeekBar } = controls;
const { keyboardControls } = utils;
import CustomPlayPause from "./CustomPlayPause";

export default class PlayButton extends Component {
  render() {
    const props = this.props;
    return (
      <Media>
        {mediaProps => (
          <div
            className="media"
            onKeyDown={keyboardControls.bind(null, mediaProps)}
          >
            <Player src={props.audioLink} className="media-player" />
            <div className="media-controls">
              <CustomPlayPause />
            </div>
          </div>
        )}
      </Media>
    );
  }
}
