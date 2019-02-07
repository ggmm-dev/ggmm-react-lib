import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class SocialBar extends Component {
  render() {
    const props = this.props,
      Bar = styled.div`
        width: 110px;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 20px 0px;
        i {
          color: ${props.iconColor};
        }
      `;

    return (
      <Bar>
        {props.spotify && (
          <Link to={props.spotify} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify" />
          </Link>
        )}
        {props.itunes && (
          <Link to={props.itunes} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-itunes" />
          </Link>
        )}
        {props.google && (
          <Link to={props.google} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google-play" />
          </Link>
        )}
      </Bar>
    );
  }
}
