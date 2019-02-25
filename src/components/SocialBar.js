import React, { Component } from "react";
import styled from "styled-components";

export default class SocialBar extends Component {
  render() {
    const props = this.props,
      Bar = styled.div`
        display: flex;
        justify-content: space-between;
        p {
          margin-right: 20px;
        }
        i {
          color: ${props.iconColor};
          margin-right: 20px;
        }
      `;

    return (
      <Bar className={props.customClass}>
        {props.label ? <p>{props.label}</p> : ""}
        {props.spotify && (
          <a href={props.spotify} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify" />
          </a>
        )}
        {props.itunes && (
          <a href={props.itunes} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-itunes" />
          </a>
        )}
        {props.google && (
          <a href={props.google} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google-play" />
          </a>
        )}
        {props.instagram && (
          <a href={props.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
        )}
        {props.facebook && (
          <a href={props.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" />
          </a>
        )}
        {props.youtube && (
          <a href={props.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube" />
          </a>
        )}
        {props.email && (
          <a href={props.email} target="_blank" rel="noopener noreferrer">
            <i className="far fa-envelope" />
          </a>
        )}
        {props.twitter && (
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        )}
        {props.linkedin && (
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        )}
        {props.vimeo && (
          <a href={props.vimeo} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-vimeo" />
          </a>
        )}
      </Bar>
    );
  }
}
