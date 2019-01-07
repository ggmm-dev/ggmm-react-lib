import React, { Component } from "react";
import styled from "styled-components";
const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export default class Editor extends Component {
  render() {
    return (
      <Icon>
        <i
          style={{
            color: "#00EADB"
          }}
          className="fas fa-bolt"
          onClick={this.props.enableIcon(this.props.id)}
        />
      </Icon>
    );
  }
}

//     opacity: this.state.edit ? "1" : "0.6"
