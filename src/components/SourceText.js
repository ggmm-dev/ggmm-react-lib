import React, { Component } from "react";
import styled from "styled-components";
import copy from "../assets/copy-regular.svg";

export default class SourceText extends Component {
  render() {
    const props = this.props,
      Container = styled.div`
        display: flex;
        margin: 40px;
        .title {
          background: #fab420;
          padding: 15px;
          font-size: 20px;
          border-radius: 7px;
          margin-right: 10px;

          input {
            opacity: 0;
          }

          img {
            width: 15px;
            opacity: 0.3;
            cursor: pointer;
            margin-left: 15px;
            &:hover {
              opacity: 0.9;
            }
          }
        }
        .props {
          background: rgb(245, 245, 245);
          font-size: 16px;
          padding: 15px;
          border-radius: 7px;
          li {
            list-style-type: none;
            padding: 3px 0;
          }
        }
      `;

    return (
      <Container>
        <div className="title">{this.props.title}</div>
        <div className="props">
          {this.props.types.map(type => {
            return <li>{type}</li>;
          })}
        </div>
      </Container>
    );
  }
}
