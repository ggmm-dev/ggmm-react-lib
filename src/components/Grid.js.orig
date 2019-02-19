import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Editor from "./Editor";
import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";
import { Media, Player, controls, utils } from "react-media-player";
import CustomPlayPause from "./CustomPlayPause";
const { CurrentTime, SeekBar } = controls;
const { keyboardControls } = utils;

export default class Grid extends Component {
  renderOverlayText = content => {
    const props = this.props;
    if (props.textType === "overlay") {
      return (
        <div className="title" dangerouslySetInnerHTML={{ __html: content }} />
      );
    }
  };

  renderMarkup = content => {
    return { __html: content };
  };

  renderGridTitle = (title, content, link) => {
    if (link) {
      return (
        <div>
          <Link to={link}>
            <h3>{title}</h3>
          </Link>
          <Link to={link}>
            <p dangerouslySetInnerHTML={this.renderMarkup(content)} />
          </Link>
        </div>
      );
    } else if (title && content) {
      return (
        <div>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={this.renderMarkup(content)} />
        </div>
      );
    } else if (content) {
      return <p dangerouslySetInnerHTML={this.renderMarkup(content)} />;
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

  renderGridImage = (image, link) => {
    console.log("init");
    if (image && link) {
      return (
        <Link to={link}>
          <img src={image} alt="Grid Image" />
        </Link>
      );
    } else if (image) {
      console.log(true);
      return <img src={image} alt="Grid Image" />;
    }
  };
  renderGrid() {
    const props = this.props;
    if (props.data) {
      return _.map(props.data, (grid, i) => {
        const Grid = styled.div`
          @media screen and (max-width: 767px){
            text-align: center;
            margin: 0 auto;
            .icon-image{
              margin: 0 auto !important;
            }
          }
          .grid-image {
            background-image: url('${grid.image}');
            background-size: cover;
            height: ${this.props.height};
          }

          .media-controls {
            display: flex;
            font-family: sans-serif;
          }
          .media {
            position: absolute;
            display: flex;
            justify-content: center;
            width: 100%;
            font-size: 52px;
            color: white;
        }
          input[type="range"] {
              width: 90%;
              margin: 0 20px;
          }

          time {
              color: gray;
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
              width: auto;
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

        const IconImage = styled.div`
          height: ${this.props.imageHeight};
          background-image: ${this.props.imageCover
            ? "url(" + grid.image + ")"
            : ""};
          background-size: cover;
          background-position: center;
        `;

        const Overlay = styled.div`
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
<<<<<<< HEAD
        `

        if (this.props.type === 'cover') {
=======
        `;
        if (this.props.type === "cover") {
>>>>>>> ggwork
          return (
            <Grid key={i}>
              <div className="grid-image">
                {this.renderOverlayText(grid.content)}
                {this.props.children}
                {props.overlay && <Overlay />}
              </div>
              {this.renderUnderText(grid.content)}
            </Grid>
          );
        }

        if (this.props.type === "icon") {
          console.log(grid.image);
          return (
            <Grid key={i}>
              {grid.image && (
                <IconImage className="icon-image">
                  {grid.audioLink && <PlayButton audioLink={grid.audioLink} />}
                  {this.renderGridImage(grid.image, grid.link)}
                  {this.renderOverlayText(grid.content)}
                </IconImage>
              )}
              <div className="subcontent">
                {this.renderGridTitle(grid.title, grid.content, grid.link)}

                {grid.linkTitle && (
                  <Link to={grid.link} className="grid-button">
                    {grid.linkTitle}
                  </Link>
                )}
              </div>
            </Grid>
          );
        }
        if (this.props.type === "text") {
          return (
            <Grid key={i}>
              <div className="grid-content">{this.props.children}</div>
            </Grid>
          );
        }
      });
    }
  }

  renderContent() {
    const props = this.props;

    const gridTotal = Object.keys(props.data).length;

    const Container = styled.div`
      padding: ${props.padding} 0px;
      ${this.props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"};
      h2 {
        padding: 40px;
        text-align: ${props.textAlign};
      }
    `;

    const Wrapper = styled.div`
        ${props.containerStyles}
        display: grid;
        position: relative;
        max-width: ${props.maxWidth};
        ${props.maxWidth && "margin: 0 auto;"}
        grid-template-columns: repeat(${props.mobileColumns}, 1fr);
        grid-gap: ${props.gridGap};
        @media screen and (min-width: 768px) {
          grid-template-columns: repeat(${props.tabletColumns}, 1fr);
        }
        @media screen and (min-width: 1024px) {
          grid-template-columns: repeat(${props.columns}, 1fr);
        }
      `;
    if (props) {
      return (
        <Container className={props.customClass}>
          {props.title && <h2 style={{ width: "100%" }}>{this.props.title}</h2>}
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
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
