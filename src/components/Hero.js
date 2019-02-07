import React, { Component } from "react";
import styled from "styled-components";
import Editor from "./Editor";

export default class Hero extends Component {
  renderBackground() {
    const props = this.props;

    const VimeoWrapper = styled.div`
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
        iframe {
          width: 100vw;
          height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
          min-height: 100vh;
          min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `,
      ImageWrapper = styled.div`
        background-image: url(${props.imageUrl});
        position: relative;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      `,
      ColorWrapper = styled.div`
        height: 100%;
        width: 100%;
        background-color: ${props.bgColor};
      `,
      Overlay = styled.div`
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3;
      `;

    if (props.type === "video") {
      return (
        <VimeoWrapper>
          {props.overlay && <Overlay />}
          <iframe
            title="Iframe"
            src={
              "https://player.vimeo.com/video/" +
              props.videoId +
              "?background=1&autoplay=1&loop=1&byline=0&title=0"
            }
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen={true}
          />
          {this.renderCopy()}
        </VimeoWrapper>
      );
    } else if (props.type === "image") {
      return (
        <ImageWrapper>
          {props.overlay && <Overlay />} {this.renderCopy()}
        </ImageWrapper>
      );
    } else if (props.type === "color") {
      return (
        <ColorWrapper>
          {props.overlay && <Overlay />} {this.renderCopy()}
        </ColorWrapper>
      );
    }
  }

  renderCopy() {
    const props = this.props;

    const Intro = styled.div`
      margin: 0 auto;
      width: 90%;
      max-width: 480px;
      height: 100%;
      position: relative;
      z-index: 5;
      flex-wrap: wrap;
      display: flex;
      align-content: center;
      color: white;
      text-align: center;

      h1 {
        margin: 0;
      }
      p {
        margin: 0;
        width: 100%;
      }
    `;
    if (props.hasChildren) {
      return <div>{props.children}</div>;
    } else if (props) {
      return (
        <Intro>
          <h1>{props.headline}</h1>
          <p>{props.subheadline}</p>

          <a
            style={{ margin: "0 auto" }}
            className="btn"
            href={props.buttonUrl}
          >
            {props.buttonTitle}
          </a>
        </Intro>
      );
    }
  }

  render() {
    const Hero = styled.div`
      position: relative;
      width: 100%;
      z-index: 1;
      padding: ${this.props.padding} 0px;
      height: ${this.props.height + "vh"};
      min-height: ${this.props.minHeight + "px"};
    `;

    return (
      <Hero className={this.props.customClass}>
        {this.props.editor && (
          <Editor
            blockUp={this.props.blockUp}
            blockDown={this.props.blockDown}
            id={this.props.id}
            deleteBlock={this.props.deleteBlock}
            enableIcon={this.props.enableIcon}
          />
        )}
        {this.renderBackground()}
        {!this.props.hasChildren && this.props.children}
      </Hero>
    );
  }
}
