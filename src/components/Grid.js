import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Editor from "./Editor";

export default class Grid extends Component {
  renderGrid() {
    const props = this.props;
    if (props.data) {
      return _.map(props.data, grid => {
        const Grid = styled.div`
          background-image: url(${grid.image});
          background-size: cover;
          height: ${this.props.height};
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-position: center;
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
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: grid.content }}
            />

            {props.overlay && <Overlay />}
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
      grid-template-columns: repeat(${props.columns}, 1fr);
      grid-gap: ${props.gridGap};

      ${this.props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"};
    `;
    return (
      <Container>
        {" "}
        {this.props.editor && (
          <Editor enableIcon={this.props.enableIcon(this.props.id} />
        )}
        {this.renderGrid()}
      </Container>
    );
  }
}
