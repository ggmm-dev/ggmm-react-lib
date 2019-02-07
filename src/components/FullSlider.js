import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import _ from "lodash";
import Editor from "./Editor";
export default class FullSlider extends Component {
  renderSlides() {
    const props = this.props;
    if (props.imageType === "cover") {
      return _.map(props.data, slide => {
        const Box = styled.div`
          height: ${props.height};
          background: url(${slide.image}) center / cover;
        `;
        return <Box />;
      });
    } else if (props.imageType === "static") {
      return _.map(props.data, slide => {
        const Box = styled.div`
          img {
            width: 100%;
          }
        `;
        return (
          <Box>
            <img src={slide.image} alt="Slider" />
          </Box>
        );
      });
    }
  }
  render() {
    const props = this.props;

    const settings = {
        dots: props.dots,
        infinite: props.infinite,
        autoplay: props.autoplay,
        speed: props.speed,
        arrows: true,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll
      },
      MainSlide = styled.div`
        padding: ${props.padding} 0px;
        position: relative;
        .slick-prev {
          left: 15px;
          z-index: 3;
        }
        .slick-next {
          right: 15px;
          z-index: 3;
        }
      `;
    return (
      <MainSlide className={this.props.customClass}>
        {this.props.editor && (
          <Editor
            blockUp={this.props.blockUp}
            blockDown={this.props.blockDown}
            id={this.props.id}
            deleteBlock={this.props.deleteBlock}
            enableIcon={this.props.enableIcon}
          />
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
      </MainSlide>
    );
  }
}
