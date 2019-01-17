import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Editor from "./Editor";

export default class Grid extends Component {
  renderOverlayText = content => {
    const props = this.props;
    if (props.textType === "overlay") {
      return (
        <div className="title" dangerouslySetInnerHTML={{ __html: content }} />
      );
    }
  };

  renderUnderText = content => {
    const props = this.props;
    if (props.textType === "under") {
      return (
        <div
          className="under-text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
  };
  renderGrid() {
    const props = this.props;
    if (props.data) {
      return _.map(props.data, grid => {
        const Grid = styled.div`
          .grid-image {
            background-image: url(${grid.image});
            background-size: cover;
            height: ${this.props.height};
          }
          .icon-image,
          .grid-image {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: ${this.props.align};
          }
          .icon-image {
            img {
              padding: ${this.props.imagePadding};
              max-height: ${this.props.imageHeight};
            }
          }
          .under-text {
            padding: 15px 0 30px;
          }
          .title {
            color: white;
            position: relative;
            z-index: 1;
          }
        `;

        const Overlay = styled.div`
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
        `;
        if (this.props.type === "cover") {
          return (
            <Grid>
              <div className="grid-image">
                {this.renderOverlayText(grid.content)}

                {props.overlay && <Overlay />}
              </div>
              {this.renderUnderText(grid.content)}
            </Grid>
          );
        }
        if (this.props.type === "icon") {
          return (
            <Grid>
              <div className="icon-image">
                <img src={grid.image} alt="Grid Image" />
                {this.renderOverlayText(grid.content)}

                {props.overlay && <Overlay />}
              </div>
              {this.renderUnderText(grid.content)}
            </Grid>
          );
        }
      });
    }
  }
  render() {
    const props = this.props;

    const gridTotal = Object.keys(props.data).length;

    const Container = styled.div`
        ${this.props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"};
      `,
      Wrapper = styled.div`
        ${props.containerStyles}
        display: grid;
        position: relative;
        padding: ${props.padding} 0px;
        grid-template-columns: repeat(${props.columns}, 1fr);
        grid-gap: ${props.gridGap};
      `;
    return (
      <Container>
        <h2 style={{ width: "100%" }}>{this.props.title}</h2>

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
          {this.renderGrid()}
        </Wrapper>
      </Container>
    );
  }
}
