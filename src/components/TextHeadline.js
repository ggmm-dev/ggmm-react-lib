import React, { Component } from "react";
import styled from "styled-components";
import Editor from "./Editor";

export default class TextHeadline extends Component {
  render() {
    const props = this.props;

    const Text = styled.div`
      position: relative;
      text-align: ${props.align};
      max-width: ${props.maxWidth};
      width: ${props.width};
      margin: ${props.margin};
      padding: ${props.padding} 0px;
      h3 {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: bold;
      }
      h1,
      p,
      h3 {
        margin: 0;
      }
      p {
        padding-top: 10px;
      }
    `;
    return (
      <Text className={props.customClass}>
        {this.props.editor && (
          <Editor
            blockUp={this.props.blockUp}
            blockDown={this.props.blockDown}
            id={this.props.id}
            deleteBlock={this.props.deleteBlock}
            enableIcon={this.props.enableIcon}
          />
        )}
        <h3>{props.cat}</h3>
        <h1>{props.headline}</h1>
        <p>{props.subheadline}</p>
      </Text>
    );
  }
}
