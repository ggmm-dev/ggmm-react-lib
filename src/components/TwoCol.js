import React, { Component } from "react";
import styled from "styled-components";
import Editor from "./Editor";

export default class TwoCol extends Component {
  renderLeft() {
    const props = this.props;
    if (props.left === "imageCover") {
      const Column = styled.div`
        background-image: url(${props.leftContent});
        background-size: cover;
        height: ${props.imageHeight};
        width: 100%;
        position: relative;
        background-position: center;
        @media screen and (min-width: 1024px) {
          width: ${props.leftWidth};
          padding-right: 50px;
        }
      `;
      return <Column />;
    } else if (props.left === "image") {
      const Column = styled.div`
        width: 100%;
        position: relative;
        @media screen and (min-width: 1024px) {
          width: ${props.leftWidth};
          padding-right: 50px;
        }
        img {
          width: 100%;
        }
      `;
      return (
        <Column>
          <img src={props.leftContent} alt={props.leftAlt} />
        </Column>
      );
    } else if (props.left === "text") {
      const Column = styled.div`
        width: 100%;
        position: relative;
        @media screen and (min-width: 1024px) {
          width: ${props.leftWidth};
        }
      `;
      return (
        <Column>
          <div dangerouslySetInnerHTML={{ __html: props.leftContent }} />
        </Column>
      );
    } else if (props.left === "children") {
      const Column = styled.div`
        width: 100%;
        position: relative;
        @media screen and (min-width: 1024px) {
          width: ${props.leftWidth};
        }
      `;
      return (
        <Column>
          <div dangerouslySetInnerHTML={{ __html: props.children }} />
        </Column>
      );
    }
  }
  renderRight() {
    const props = this.props;
    if (props.right === "imageCover") {
      console.log(props);
      const Column = styled.div`
        position: relative;
        background-image: url(${props.rightContent});
        background-size: cover;
        background-attachment: ${props.fixed ? "fixed" : ""};
        height: ${props.imageHeight};
        width: 100%;
        background-position: center;
        @media screen and (min-width: 1024px) {
          width: ${props.rightWidth};
          padding-left: 50px;
        }
      `;
      return <Column />;
    } else if (props.right === "image") {
      const Column = styled.div`
        width: 100%;
        @media screen and (min-width: 1024px) {
          width: 50%;
          padding-left: 50px;
        }
        img {
          width: 100%;
        }
      `;
      return (
        <Column>
          <img src={props.rightContent} alt={props.rightAlt} />
        </Column>
      );
    } else if (props.right === "text") {
      const Column = styled.div`
        width: 100%;
        position: relative;
        height: ${this.props.height};
        padding: ${this.props.rightPadding};
        @media screen and (min-width: 1024px) {
          width: ${props.rightWidth};
        }
      `;
      return (
        <Column>
          <div dangerouslySetInnerHTML={{ __html: props.rightContent }} />
        </Column>
      );
    } else if (props.right === "children") {
      const Column = styled.div`
        width: 100%;
        position: relative;
        @media screen and (min-width: 1024px) {
          width: ${props.rightWidth};
        }
      `;
      return <Column>{this.props.children}</Column>;
    }
  }
  render() {
    const props = this.props,
      Columns = styled.div`
        background-color: ${this.props.bgColor};
        padding: ${this.props.padding} 0px;
        position: relative;
        ${this.props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"};
      `,
      Wrapper = styled.div`
        align-items: ${this.props.alignItems};
        justify-content: ${this.props.justify};
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: ${props.maxWidth};
        ${props.right === "image" ? "flex-direction: column-reverse" : ""}
        @media screen and (min-width: 1024px) {
          ${props.right === "image" ? "flex-direction: inherit" : ""}
        }
      `;

    return (
      <Columns className={props.customClass}>
        <Wrapper>
          {this.props.editor && (
            <Editor
              blockUp={this.props.blockUp}
              blockDown={this.props.blockDown}
              id={this.props.id}
              deleteBlock={this.props.deleteBlock}
              enableIcon={this.props.enableIcon}
            />
          )}

          {this.renderLeft()}
          {this.renderRight()}
        </Wrapper>
      </Columns>
    );
  }
}
