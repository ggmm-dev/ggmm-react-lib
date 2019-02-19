import React, { Component } from "react";
import styled from "styled-components";

export default class Loader extends Component {
  render() {
    const props = this.props,
      LoadingContainer = styled.div`
        width: 100%;
        text-align: center;
        padding: 130px;
        ${props.fullHeight &&
          "height: 100vh; flex-direction: column; display: flex; align-items: center; justify-content: center;"}
        i {
          font-size: 22px;
          color: ${props.spinnerColor};
          background: ${props.backgroundColor};
          padding: 15px;
          border-radius: 50%;
          animation: rotater 1s infinite;
        }
        p {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
          font-size: 12px;
          margin-top: 10px;
          color: ${props.spinnerColor};
        }
        @keyframes rotater {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `;
    return (
      <LoadingContainer>
        <div>
          <i className="fas fa-spinner" />
          {props.title && <p>{props.title}</p>}
        </div>
      </LoadingContainer>
    );
  }
}
