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
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: ${this.props.height};
          }
          .under-text {
            padding: 15px 0 30px;
            font-size: 1.5em;
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
        return (
          <Grid>
            <div className="grid-image">
              {this.renderOverlayText(grid.content)}

              {props.overlay && <Overlay />}
            </div>
            {this.renderUnderText(grid.content)}
          </Grid>
        );
      });
    }
  }
  render() {
    const props = this.props;

    const gridTotal = Object.keys(props.data).length;

    const Container = styled.div`
      display: grid;
      position: relative;
      padding: ${props.padding} 0px;
      grid-template-columns: repeat(${props.columns}, 1fr);
      grid-gap: ${props.gridGap};

      ${this.props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"};
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
        {this.renderGrid()}
      </Container>
    );
  }
}
