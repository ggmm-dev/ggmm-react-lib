import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Editor from "./Editor";

export default class ThreeCol extends Component {
  renderLayout() {
    return _.map(this.props.data, box => {
      const props = this.props;

      const boxTotal = Object.keys(props.data).length;

      const Box = styled.div`
        img {
          width: 100%;
        }
        .box-image {
          height: ${props.imageHeight};
          background: url(${box.image}) center / cover;
        }
        .icon-image {
          margin-bottom: 30px;
          img {
            max-height: ${props.imageHeight};
          }
        }
        @media screen and (min-width: 1024px) {
          width: ${100 / boxTotal - 1 + "%"};
        }
      `;

      if (props.type === "imageCover") {
        return (
          <Box>
            <div className="box-image" />
            {props.text && (
              <div dangerouslySetInnerHTML={{ __html: box.content }} />
            )}
          </Box>
        );
      }
      if (props.type === "icon") {
        return (
          <Box>
            <div className="icon-image" />
            <img src={box.image} alt="Icon Image" />
            {props.text && (
              <div dangerouslySetInnerHTML={{ __html: box.content }} />
            )}
          </Box>
        );
      }
    });
  }
  render() {
    const props = this.props;

    const Container = styled.div`
      position: relative;
      padding: ${props.padding} 0px;
      ${props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"}
    `;

    const Flex = styled.div`
      display: flex;
      position: relative;
      flex-wrap: wrap;
      text-align: ${props.textAlign};
      justify-content: space-between;
    `;
    return (
      <Container>
        {this.props.editor && (
          <Editor
            blockUp={this.props.blockUp}
            blockDown={this.props.blockDown}
            id={this.props.id}
            deleteBlock={this.props.deleteBlock}
            enableIcon={this.props.enableIcon}
          />
        )}

        <Flex>{this.renderLayout()}</Flex>
      </Container>
    );
  }
}
