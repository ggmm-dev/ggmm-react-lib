import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import _ from "lodash";
import Editor from "./Editor";
export default class FullSlider extends Component {
  renderSlides() {
    const props = this.props;
    return _.map(props.data, slide => {
      const Box = styled.div`
        height: ${props.height};
        background: url(${slide.image}) center / cover;
      `;
      return <Box />;
    });
  }
  render() {
    const props = this.props;

    const settings = {
      dots: props.dots,
      infinite: props.infinite,
      speed: props.speed,
      slidesToShow: props.slidesToShow,
      slidesToScroll: props.slidesToScroll
    };
    return (
      <div style={{ position: "relative" }}>
        {this.props.editor && (
          <Editor enableIcon={this.props.enableIcon(this.props.id)} />
        )}

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>{this.renderSlides()}</Slider>
      </div>
    );
  }
}
