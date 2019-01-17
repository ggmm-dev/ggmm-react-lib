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
        ${props.boxStyles}
        .box-image {
          height: ${props.imageHeight};
          background: url(${box.image}) center / cover;
          img {
            width: 100%;
          }
        }
        .icon-image {
          img {
            margin-bottom: 30px;
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
            <div className="icon-image">
              <img className="icon-svg" src={box.image} alt="Icon Image" />
              {props.text && (
                <div dangerouslySetInnerHTML={{ __html: box.content }} />
              )}
            </div>
          </Box>
        );
      }
    });
  }
  render() {
    const props = this.props;

    const Container = styled.div`
      ${props.containerStyles}
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
        <h2>{this.props.title}</h2>

        <Flex>{this.renderLayout()}</Flex>
      </Container>
    );
  }
}
