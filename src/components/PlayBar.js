import React, { Component } from "react";
import styled from "styled-components";

import { Media, Player, controls, utils } from "react-media-player";
const { CurrentTime, SeekBar } = controls;
const { keyboardControls } = utils;
import CustomPlayPause from "./CustomPlayPause";

export default class PlayBar extends Component {
  render() {
    const props = this.props,
      PlayContainer = styled.div`
        .media-controls {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          background: ${this.props.bgColor};
          padding: 20px;
          margin: 30px 0;
          input {
            width: 87%;
          }
          input[type="range"] {
            -webkit-appearance: none;
            margin: 18px 0;
          }
          input[type="range"]:focus {
            outline: none;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            animate: 0.2s;
            background: ${this.props.iconColor};
            border-radius: 1.3px;
          }
          input[type="range"]::-webkit-slider-thumb {
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #ffffff;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -14px;
          }
          input[type="range"]:focus::-webkit-slider-runnable-track {
            background: white;
          }
          input[type="range"]::-moz-range-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            animate: 0.2s;
            background: #3071a9;
            border-radius: 1.3px;
            border: 0.2px solid #010101;
          }
          input[type="range"]::-moz-range-thumb {
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #ffffff;
            cursor: pointer;
          }
          input[type="range"]::-ms-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            animate: 0.2s;
            background: transparent;
            border-color: transparent;
            border-width: 16px 0;
            color: transparent;
          }
          input[type="range"]::-ms-fill-lower {
            background: #2a6495;
            border-radius: 2.6px;
          }
          input[type="range"]::-ms-fill-upper {
            background: #3071a9;
            border-radius: 2.6px;
          }
          input[type="range"]::-ms-thumb {
            height: 36px;
            width: 16px;
            border-radius: 3px;
            background: #ffffff;
            cursor: pointer;
          }
          input[type="range"]:focus::-ms-fill-lower {
            background: #3071a9;
          }
          input[type="range"]:focus::-ms-fill-upper {
            background: #367ebd;
          }
          time,
          i {
            color: ${this.props.iconColor};
          }
        }
      `;
    return (
      <PlayContainer>
        <Media>
          {mediaProps => (
            <div
              className="media"
              onKeyDown={keyboardControls.bind(null, mediaProps)}
            >
              <Player src={props.audioLink} className="media-player" />
              <div className="media-controls">
                <CustomPlayPause />
                <SeekBar />
                <CurrentTime />
              </div>
            </div>
          )}
        </Media>
      </PlayContainer>
    );
  }
}
