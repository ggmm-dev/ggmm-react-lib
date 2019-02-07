import React, { Component } from "react";
import styled from "styled-components";

export default class SocialShare extends Component {
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
      <Bar>
        {props.label ? <p>{props.label}</p> : <p>Share</p>}

        {props.facebook && (
          <a
            href={"http://www.facebook.com/sharer/sharer.php?u=" + props.url}
            target="_blank"
          >
            <i className="fab fa-facebook" />
          </a>
        )}

        {props.twitter && (
          <a
            href={
              "http://twitter.com/share?text=" +
              props.title +
              "&url=" +
              props.url
            }
            target="_blank"
            onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
          >
            <i className="fab fa-twitter" />
          </a>
        )}
        {props.linkedin && (
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        )}
      </Bar>
    );
  }
}
